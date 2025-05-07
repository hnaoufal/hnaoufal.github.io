import React, { useState, useRef, useEffect } from "react";
import {
  Grid,
  Box,
  Heading,
  Text,
  Image,
  Spinner,
  Flex,
  Center,
  Select,
  Portal,
  createListCollection,
  Button,
  CloseButton,
  Dialog,
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

const sampleResults = [
  { src: 'images/img1.png', label: 'Banana', confidence: 75.85, correct: true },
  { src: 'images/img2.jpeg', label: 'Cock', confidence: 36.22, correct: true },
  { src: 'images/img3.jpg', label: 'Espresso', confidence: 76.62, correct: true },
  { src: 'images/img4.jpeg', label: 'Apple (recognized as pomgranade)', confidence: 49.44, correct: false },
  { src: 'images/img5.jpeg', label: 'Roof (recognized as solar panels)', confidence: 27.47, correct: false },
  { src: 'images/img6.webp', label: 'Flowers (recognized as vase)', confidence: 48.41, correct: false },
];

function App() {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [name, setName] = useState("");
  const [confidence, setConfidence] = useState(null);
  const [results, setResults] = useState([]);
  const [classifier, setClassifier] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedModel, setSelectedModel] = useState(classifiers.items[0].value);
  const imgRef = useRef(null);

  // Reload classifier whenever selection changes
  useEffect(() => {
    setLoading(true);
    ml5.imageClassifier(selectedModel, (clf) => {
      setClassifier(clf);
      setLoading(false);
      setName('');
      setConfidence(null);
      setResults([]);
    });
  }, [selectedModel]);

  // Classify image on load
  const classifyImage = () => {
    if (classifier && imgRef.current) {
      classifier.classify(imgRef.current, (res, err) => {
        if (err) {
          console.error('Classification error:', err);
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
        { name: 'Conf.', value: parseFloat(confidence) },
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
          <Flex direction="column" h="100%">
            <Flex justify="space-between" align="center" mb={4}>
              <Box>
                <Heading size="lg" color="whiteAlpha.900">Image for Classification</Heading>
                <Text fontSize="sm" color="gray.400">Drag and drop an image into the area below to classify it.</Text>
              </Box>
              <Flex align="center">
                <Select.Root
                  color="whiteAlpha.900"
                  collection={classifiers}
                  value="MobileNet"
                  defaultValue="MobileNet"
                  onValueChange={setSelectedModel}
                  size="sm"
                  width="320px"
                  disabled
                >
                  <Select.HiddenSelect />
                  <Select.Label color="whiteAlpha.900">Classifier</Select.Label>
                  <Select.Control>
                    <Select.Trigger>
                      <Select.ValueText placeholder="MobileNet" />
                    </Select.Trigger>
                    <Select.IndicatorGroup>
                      <Select.Indicator />
                    </Select.IndicatorGroup>
                  </Select.Control>
                  <Portal>
                    <Select.Positioner>
                      <Select.Content>
                        {classifiers.items.map((c) => (
                          <Select.Item item={c} key={c.value}>
                            {c.label}
                            <Select.ItemIndicator />
                          </Select.Item>
                        ))}
                      </Select.Content>
                    </Select.Positioner>
                  </Portal>
                </Select.Root>
    <Dialog.Root size="cover" placement="center" motionPreset="slide-in-bottom">
                  <Dialog.Trigger asChild>
                    <Button size="sm" ml={2}>Documentation</Button>
                  </Dialog.Trigger>
                  <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                      <Dialog.Content>
                        <Dialog.Header>
                          <Dialog.Title>Dokumentation</Dialog.Title>
                          <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                          </Dialog.CloseTrigger>
                        </Dialog.Header>
                        <Dialog.Body>
                          <strong>1) Technisch:</strong>
                          <ul>
                            <li><strong>React:</strong> Basisbibliothek zur Erstellung von UI-Komponenten mit deklarativen Zustands- und Lifecycle-Methoden.</li>
                            <li><strong>Chakra UI:</strong> Component-Library für React, die sofort einsatzbereite, anpassbare UI-Bausteine liefert.</li>
                            <li><strong>ml5.js:</strong> High-Level-API für maschinelles Lernen im Browser (WebGL-basiertes ImageClassifier-Modul).</li>
                            <li><strong>Recharts:</strong> Bibliothek zur Darstellung von Diagrammen (PieChart, BarChart) als React-Komponenten.</li>
                          </ul>
                          <p>Technische Besonderheiten: Dynamisches Nachladen verschiedener Klassifikatoren (MobileNet, Darknet, DoodleNet) per Dropdown; flexibles Layout mit Chakra UI Grids und Flexbox.</p>

                          <strong>2) Fachlich:</strong>
                          <p>Logik: Nach Auswahl des Klassifikators lädt die Komponente ml5.imageClassifier neu und leert vorherige Ergebnisse. Beim Laden eines Bildes wird es automatisch klassifiziert, und die Top-3-Vorhersagen werden in einem Balkendiagramm angezeigt. Die Konfidenz des besten Treffers wird als Prozentwert dargestellt und farblich bewertet (grün/orange/rot).</p>
                          <p>Ansatz: Drag-and-Drop-Bereich für Bilder, automatisches Klassifizieren via Web API, Visualisierung mittels Recharts.</p>
                          <p>Ergebnisse: Nutzer erhält sofortige Rückmeldung zur Objektklasse im Bild und Vertrauensmaß.</p>
  <br />
  <br />
  <hr />
    <h2>1. Geringe Konfidenz trotz korrekter Klassifikation („Cock“, 36,22 %)</h2>
  <ul>
    <li><strong>Klassen-Ungleichgewicht und Datensatz-Bias:</strong> In ImageNet, auf dem MobileNet vortrainiert ist, kommen Hähne seltener vor, daher weniger Merkmalsrepräsentationen für diese Klasse.</li>
    <li><strong>Fehlende Unterscheidungsmerkmale:</strong> Einzelner Hahn vor unruhigem Hintergrund kann leicht mit anderen Vögeln verwechselt werden.</li>
    <li><strong>Bildqualität und Auflösung:</strong> JPEG-Artefakte verschleiern feine Merkmale wie Schnabel oder Gefieder.</li>
  </ul>

  <br />
  <h2>2. Hohe Konfidenz, aber falsche Klassifikation („Apple“ → „Pomegranate“, 49,44 %)</h2>
  <ul>
    <li><strong>Ähnliche visuelle Merkmale:</strong> Granatäpfel und Äpfel teilen Form und Farbe, was die Trennung erschwert.</li>
    <li><strong>Überanpassung an häufige Granatapfel-Bilder:</strong> Modell erwartet rote, strukturierte Früchte eher als Granatäpfel.</li>
    <li><strong>Konfidenz oberhalb 50 % nötig:</strong> 49,44 % liegt in der unsicheren Zone (40–60 %), wodurch das Modell kaum differenziert.</li>
  </ul>

  <br />
  <h2>Mögliche Ursachen und Gegenmaßnahmen</h2>
  <table>
    <thead>
      <tr>
        <th>Ursache</th>
        <th>Wirkung</th>
        <th>Abhilfe</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Datensatz-Bias</td>
        <td>Unterrepräsentierte Klassen → niedrige Konfidenz</td>
        <td>Fein-Tuning mit eigenen, balancierten Beispieldaten</td>
      </tr>
      <tr>
        <td>Visuelle Ähnlichkeit</td>
        <td>Verwechslung ähnlicher Objekte (Apfel vs. Granatapfel)</td>
        <td>Zusätzliche Feature-Extraktion, andere Blickwinkel</td>
      </tr>
      <tr>
        <td>Bildqualität & Kontext</td>
        <td>Artefakte, unruhiger Hintergrund → unsichere Zuordnung</td>
        <td>Bildvorverarbeitung (Crop, Rauschunterdrückung, Normierung)</td>
      </tr>
      <tr>
        <td>Modell-Größe vs. Genauigkeit</td>
        <td>Leichtgewichtig, aber weniger präzise</td>
        <td>Einsatz eines stärkeren Modells (z. B. ResNet)</td>
      </tr>
    </tbody>
  </table>

  <p>Empfehlung: Für höhere Zuverlässigkeit spezifische Objekte mit Transfer Learning nachtrainieren.</p>
                          <p>Quellen: <a href="https://ml5js.org/" target="_blank" rel="noopener noreferrer">ml5.js Documentation</a>, <a href="https://chakra-ui.com/" target="_blank" rel="noopener noreferrer">Chakra UI Docs</a>, <a href="https://recharts.org/" target="_blank" rel="noopener noreferrer">Recharts Guide</a>.</p>
                        </Dialog.Body>
                      </Dialog.Content>
                    </Dialog.Positioner>
                  </Portal>
                </Dialog.Root>
              </Flex>
            </Flex>

            <Box mb={4} overflowY="auto" maxH="300px">
              {sampleResults.map((item, idx) => (
                <Flex key={idx} align="center" mb={2} p={2} bg={item.correct ? 'gray.700' : 'red.700'} borderRadius="md">
                  <Image src={item.src} boxSize="60px" objectFit="cover" borderRadius="md" mr={4} />
                  <Text color="whiteAlpha.900" fontWeight="bold" mr={4}>{item.label}</Text>
                  <Text color="whiteAlpha.600">{item.confidence}%</Text>
                </Flex>
              ))}
            </Box>
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
            {confidence != null && (
              <Text mt={2} color="gray.200">
                {confidence >= 75 ? (
                  <>Picture most likely <Text as="span" color="green.400">recognized</Text>.</>
                ) : confidence >= 25 ? (
                  <>Picture possibly <Text as="span" color="orange.400">recognized</Text>.</>
                ) : (
                  <>Picture most likely not <Text as="span" color="red.400">recognized</Text>.</>
                )}
              </Text>
            )}
          </Box>

          {/* Diagram Representation */}
          <Box bg="gray.800" p={6} borderRadius="2xl" boxShadow="lg" h="100%">
            <Heading size="lg" mb={4} color="whiteAlpha.900">Diagram Representation</Heading>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} h="calc(100% - 2rem)">

              {/* Pie Chart with Percentage Label */}
              <Box bg="gray.700" borderRadius="md" p={4} display="flex" alignItems="center" justifyContent="center">
                {pieData.length > 0 ? (
                  <PieResponsiveContainer width={350} height={350}>
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

const classifiers = createListCollection({
  items: [
    { label: "MobileNet", value: "MobileNet" },
  ],
});

export default App;

