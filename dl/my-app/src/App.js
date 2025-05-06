import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  Box,
  Heading,
  Text,
  Image,
  Stack,
  Center,
  Spinner,
} from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
  ResponsiveContainer as PieResponsiveContainer
} from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as BarTooltip,
  ResponsiveContainer as BarResponsiveContainer
} from 'recharts';
import { Provider } from './components/ui/provider';
import ml5 from 'ml5';

function App() {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [name, setName] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [results, setResults] = useState([]);
  const [classifier, setClassifier] = useState(null);
  const [loading, setLoading] = useState(true);
  const imgRef = useRef(null);

  // Load the MobileNet classifier
  useEffect(() => {
    const clf = ml5.imageClassifier('MobileNet', () => {
      setClassifier(clf);
      setLoading(false);
    });
  }, []);

  // Classify image on load
    // Function to classify image on load and safely set results
  const classifyImage = () => {
    if (classifier && imgRef.current) {
      classifier.classify(imgRef.current, (res) => {
        // Ensure results is always an array
        const safeResults = Array.isArray(res) ? res : [res];
        setResults(safeResults);
        if (safeResults.length > 0) {
          setName(safeResults[0].label || '');
          setConfidence(safeResults[0].confidence != null ? (safeResults[0].confidence * 100).toFixed(2) : null);
        }
      });
    }
  };

  const borderColor = isDragging ? "blue.300" : "gray.600";

  const handleDragEnter = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = Array.from(e.dataTransfer.files).find(f => f.type.startsWith('image/'));
    if (file) {
      const url = URL.createObjectURL(file);
      setImage(url);
      setName('');
      setConfidence(null);
      setResults([]);
    }
  };

  // Data for pie chart
  const pieData = confidence != null
    ? [
        { name: 'Accuracy', value: parseFloat(confidence) },
        { name: 'Remaining', value: 100 - parseFloat(confidence) }
      ]
    : [];

    // Data for bar chart: top 3 predictions, ensure results is an array
    // Data for bar chart: top 3 valid predictions
  const barData = Array.isArray(results)
    ? results
        .filter(r => r && r.label !== undefined && r.confidence != null)
        .slice(0, 3)
        .map(r => ({ name: r.label || 'Unknown', value: Math.round(r.confidence * 10000) / 100 }))
    : [];

  return (
    <Provider>
      <Grid p={4} bg="gray.900" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} h="100vh" w="100vw">

        {/* Column One */}
        <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="lg" h="100%">
          <Stack spacing={6} h="100%">
            <Box>
              <Heading size="lg" mb={2} color="whiteAlpha.900">Image for Classification</Heading>
              <Text fontSize="sm" color="gray.400">Drag an image below to classify it automatically.</Text>
            </Box>
            <Center flex="1">
              {loading ? (
                <Spinner size="xl" color="blue.300" />
              ) : image ? (
                <Image
                  ref={imgRef}
                  src={image}
                  maxH="60%"
                  objectFit="contain"
                  borderRadius="md"
                  boxShadow="md"
                  onLoad={classifyImage}
                />
              ) : (
                <Text color="gray.500">No image uploaded yet</Text>
              )}
            </Center>
            <Center>
              <Box w="100%" h="150px" bg="gray.700" border="2px dashed" borderColor={borderColor}
                   borderRadius="md" onDragEnter={handleDragEnter} onDragOver={handleDragEnter}
                   onDragLeave={handleDragLeave} onDrop={handleDrop} display="flex"
                   alignItems="center" justifyContent="center">
                <Text color="gray.400">Drag & drop a single image here</Text>
              </Box>
            </Center>
          </Stack>
        </Box>

        {/* Column Two */}
        <Grid templateRows="repeat(2, 1fr)" gap={6} h="100%">

          {/* Result */}
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="lg" h="100%">
            <Heading size="lg" mb={4} color="whiteAlpha.900">Result</Heading>
            <Text color="gray.200">Name: {name || '–'}</Text>
            <Text color="gray.200">Confidence: {confidence != null ? `${confidence}%` : '–'}</Text>
          </Box>

          {/* Diagram Representation */}
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="lg" h="100%">
            <Heading size="lg" mb={4} color="whiteAlpha.900">Diagram Representation</Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} h="calc(100% - 2rem)">

              {/* Pie Chart */}
              <Box bg="gray.700" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
                {pieData.length > 0 ? (
                  <PieResponsiveContainer width={200} height={200}>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                        <Cell fill="#48BB78" />
                        <Cell fill="#A0AEC0" />
                      </Pie>
                      <PieTooltip />
                    </PieChart>
                  </PieResponsiveContainer>
                ) : (
                  <Text color="gray.300" textAlign="center">Waiting for confidence...</Text>
                )}
              </Box>

              {/* Bar Chart: top 3 predictions */}
              <Box bg="gray.700" borderRadius="md" p={4}>
                {barData.length > 0 ? (
                  <BarResponsiveContainer width="100%" height={200}>
                    <BarChart data={barData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                      <XAxis dataKey="name" tick={{ fill: '#E2E8F0' }} />
                      <YAxis tickFormatter={(val) => `${val}%`} tick={{ fill: '#E2E8F0' }} />
                      <Bar dataKey="value" fill="#48BB78" />
                      <BarTooltip formatter={(value) => `${value}%`} labelFormatter={(label) => `Class: ${label}`} />
                    </BarChart>
                  </BarResponsiveContainer>
                ) : (
                  <Text color="gray.300" textAlign="center">Waiting for predictions...</Text>
                )}
              </Box>

            </Grid>
          </Box>
        </Grid>

      </Grid>
    </Provider>
  );
}

export default App;

