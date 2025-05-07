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
  Flex
} from "@chakra-ui/react";
import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";

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

  // Classify image on load with safety
  const classifyImage = () => {
    if (classifier && imgRef.current) {
      classifier.classify(imgRef.current, (res, err) => {
        if (err) {
          console.error('Classification error:', err);
          alert("error", err);
          return;
        }
        const safeResults = Array.isArray(res) ? res : [res];
        setResults(safeResults);
        if (safeResults.length > 0) {
          setName(safeResults[0].label || '');
          setConfidence(
            safeResults[0].confidence != null
              ? (safeResults[0].confidence * 100).toFixed(2)
              : null
          );
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

  // Pie chart data
  const pieData = confidence != null
    ? [
        { name: 'Confidence', value: parseFloat(confidence) },
        { name: '', value: 100 - parseFloat(confidence) }
      ]
    : [];

  // Bar chart data: top 3 predictions
  const barData = Array.isArray(results)
    ? results
        .filter(r => r && r.label !== undefined && r.confidence != null)
        .slice(0, 3)
        .map(r => ({ name: r.label || 'Unknown', value: Math.round(r.confidence * 10000) / 100 }))
    : [];

  return (
    <Provider>
      <Grid p={4} bg="gray.900" templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6} h="100vh" w="100vw">

        {/* Column One: integrated drop zone */}
        <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="lg" h="100%">
          {/* Use flex column to let header and dropzone fill available space */}
          <Flex direction="column" h="100%">
            {/* Header with title, description, and doc button right-aligned */}
            <Flex justify="space-between" align="center" mb={4}>
              <Box>
                <Heading size="lg" color="whiteAlpha.900">Image for Classification</Heading>
                <Text fontSize="sm" color="gray.400">Drag and drop an image into the area below to classify it.</Text>
              </Box>
              <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                <Dialog.Trigger asChild>
                  <Button size="sm">
                    Documentation
                  </Button>
                </Dialog.Trigger>
                <Portal>
                  <Dialog.Backdrop />
                  <Dialog.Positioner>
                    <Dialog.Content>
                      <Dialog.Header>
                        <Dialog.Title>Documentation</Dialog.Title>
                        <Dialog.CloseTrigger asChild>
                          <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                      </Dialog.Header>
                      <Dialog.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </Dialog.Body>
                    </Dialog.Content>
                  </Dialog.Positioner>
                </Portal>
              </Dialog.Root>
            </Flex>

            {/* Drag & drop area takes remaining vertical space */}
            <Center
              flex="1"
              bg="gray.700"
              border="2px dashed"
              borderColor={borderColor}
              borderRadius="md"
              onDragEnter={handleDragEnter}
              onDragOver={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="relative"
            >
              {loading ? (
                <Spinner size="xl" color="blue.300" />
              ) : image ? (
                <Image
                  ref={imgRef}
                  src={image}
                  maxH="100%"
                  maxW="100%"
                  objectFit="contain"
                  borderRadius="md"
                  onLoad={classifyImage}
                />
              ) : (
                <Text color="gray.400">Drag & drop a single image here</Text>
              )}
            </Center>
          </Flex>
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

              {/* Pie Chart with Percentage Label */}
              <Box bg="gray.700" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
                {pieData.length > 0 ? (
                  <PieResponsiveContainer width={250} height={250}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label={({ percent, name}) => `${(percent * 100).toFixed(0)}% ${name}`}
                        labelLine={false}
                      >
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

