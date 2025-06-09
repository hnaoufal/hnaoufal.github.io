import { useState, useEffect, useRef } from "react";
import "./App.css";
import * as tf from "@tensorflow/tfjs";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { AnimatePresence, motion } from "framer-motion";

if (process.env.PUBLIC_URL === undefined) {
  console.error("PUBLIC_URL is not defined. Please set it in your environment variables.");
}

const cleanModelURL = process.env.PUBLIC_URL + "/modelClean.json";
const bestModelURL  = process.env.PUBLIC_URL + "/modelBest.json";
const overModelURL  = process.env.PUBLIC_URL + "/modelOver.json";


// Utility: generate Gaussian noise
function gaussianNoise(std) {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return std * Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

// Ground-truth function we want to approximate
function yTrue(x) {
  return 0.5 * (x + 0.8) * (x + 1.8) * (x - 0.2) * (x - 0.3) * (x - 1.9) + 1;
}

// Create FFNN model with configurable learning rate and hidden units
function createFFNN(learningRate, hiddenUnits) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: hiddenUnits, activation: "relu", inputShape: [1] }));
  model.add(tf.layers.dense({ units: hiddenUnits, activation: "relu" }));
  model.add(tf.layers.dense({ units: 1, activation: "linear" }));
  model.compile({ optimizer: tf.train.adam(learningRate), loss: "meanSquaredError" });
  return model;
}

export default function App() {
  const [params, setParams] = useState({
    N: 100,
    noiseVariance: 0.05,
    trainRatio: 0.5,
    learningRate: 0.01,
    hiddenUnits: 100,
    batchSize: 32,
    epochsClean: 100,
    epochsBest: 50,
    epochsOver: 500,
  });

  // Models trained in-browser
  const [modelClean, setModelClean] = useState(null);
  const [modelBest, setModelBest] = useState(null);
  const [modelOver, setModelOver] = useState(null);

  // Data
  const [dataClean, setDataClean] = useState({ train: [], test: [] });
  const [dataNoisy, setDataNoisy] = useState({ train: [], test: [] });

  // Training histories
  const [histories, setHistories] = useState({ clean: null, best: null, over: null });

  // Predictions & losses: live-trained + loaded
  const [predictions, setPredictions] = useState({
    clean: null,
    best: null,
    over: null,
  });
  const [losses, setLosses] = useState({
    clean: {},
    best: {},
    over: {},
  });

  const [training, setTraining] = useState(false);
  const [showDocuModal, setShowDocuModal] = useState(false);
  const firstGraphRef = useRef(null);

  // Generate or regenerate data
  const generateData = () => {
    const { N, noiseVariance, trainRatio } = params;
    const std = Math.sqrt(noiseVariance);
    const xs = Array.from({ length: N }, () => -2 + 4 * Math.random());
    const data = xs.map(x => ({ x, y: yTrue(x), yNoisy: yTrue(x) + gaussianNoise(std) }));
    const shuffled = data.slice();
    tf.util.shuffle(shuffled);
    const splitIndex = Math.floor(N * trainRatio);
    const train = shuffled.slice(0, splitIndex);
    const test = shuffled.slice(splitIndex);

    setDataClean({ train: train.map(d => ({ x: d.x, y: d.y })), test: test.map(d => ({ x: d.x, y: d.y })) });
    setDataNoisy({ train: train.map(d => ({ x: d.x, y: d.yNoisy })), test: test.map(d => ({ x: d.x, y: d.yNoisy })) });

    setHistories({ clean: null, best: null, over: null });
    // reset loaded predictions
    setPredictions(prev => ({ ...prev, clean: null, best: null, over: null }));
  };

  // On mount: generate data
  useEffect(() => { generateData(); }, []);

  // Scroll into view after training finishes
  useEffect(() => {
    if (!training && histories.clean) {
      setTimeout(() => firstGraphRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    }
  }, [training, histories.clean]);

  // Pack inputs as tensors
  const toTensor = arr => tf.tensor2d(arr.map(d => d.x), [arr.length, 1]);
  const toLabel  = arr => tf.tensor2d(arr.map(d => d.y), [arr.length, 1]);

  // Evaluate a saved model on a dataset
  /**
   * modelKey: one of "clean" | "best" | "over"
   * split:    one of "train" | "test"
   */
  async function evaluate(modelUrl, modelKey, split, dataset) {
    let model;
    try {
      model = await tf.loadLayersModel(modelUrl);
    } catch (error) {
      // fallback to your GitHub host
      model = await tf.loadLayersModel("https://hnaoufal.github.io/" + modelUrl);
    }

    // prepare inputs & ground-truth
    const xs = toTensor(dataset);
    const ysTrue = dataset.map(d => d.y);

    // get predictions
    const preds = model.predict(xs).arraySync().flat();

    // compute MSE
    const mseVal = preds.reduce((sum, p, i) =>
      sum + Math.pow(p - ysTrue[i], 2), 0
    ) / preds.length;

    // merge into the existing nested state
    setPredictions(prev => ({
      ...prev,
      [modelKey]: {
        ...prev[modelKey],
        [split]: preds
      }
    }));

    setLosses(prev => ({
      ...prev,
      [modelKey]: {
        ...prev[modelKey],
        [split]: mseVal
      }
    }));
  }


  // On data change: load & evaluate saved models
  useEffect(() => {
    if (dataClean.test.length) {
      evaluate(cleanModelURL, "clean", 'test', dataClean.test);
      evaluate(cleanModelURL, "clean", 'train', dataClean.train);

      evaluate(bestModelURL,  "best", 'test',  dataNoisy.test);
      evaluate(bestModelURL,  "best",  'train', dataNoisy.train);

      evaluate(overModelURL,  "over",  'test', dataNoisy.test);
      evaluate(overModelURL,  "over",  'train', dataNoisy.train);
    }
  }, [dataClean, dataNoisy]);

  // Training in-browser
  const trainModels = async () => {
    setTraining(true);
    const { learningRate, hiddenUnits, batchSize, epochsClean, epochsBest, epochsOver } = params;
    const xsC = toTensor(dataClean.train), ysC = toLabel(dataClean.train);
    const xsCT = toTensor(dataClean.test),  ysCT = toLabel(dataClean.test);

    // Clean
    const mClean = createFFNN(learningRate, hiddenUnits);
    const hClean = await mClean.fit(xsC, ysC, { epochs: epochsClean, batchSize, validationData: [xsCT, ysCT] });
    setModelClean(mClean);
    const pCleanT = mClean.predict(xsC).arraySync().flat();
    const pCleanV = mClean.predict(xsCT).arraySync().flat();

    // Best-Fit
    const xsN = toTensor(dataNoisy.train), ysN = toLabel(dataNoisy.train);
    const xsNT= toTensor(dataNoisy.test),  ysNT= toLabel(dataNoisy.test);
    const mBest = createFFNN(learningRate, hiddenUnits);
    const hBest= await mBest.fit(xsN, ysN, { epochs: epochsBest, batchSize, validationData: [xsNT, ysNT] });
    setModelBest(mBest);
    const pBestT = mBest.predict(xsN).arraySync().flat();
    const pBestV = mBest.predict(xsNT).arraySync().flat();

    // Overfit
    const mOver = createFFNN(learningRate, hiddenUnits);
    const hOver= await mOver.fit(xsN, ysN, { epochs: epochsOver, batchSize, validationData: [xsNT, ysNT] });
    setModelOver(mOver);
    const pOverT = mOver.predict(xsN).arraySync().flat();
    const pOverV = mOver.predict(xsNT).arraySync().flat();

    const mse = (preds, truths) => preds.reduce((sum, p, i) => sum + Math.pow(p - truths[i], 2), 0) / preds.length;
    setLosses({
      clean: { train: mse(pCleanT, dataClean.train.map(d=>d.y)), test: mse(pCleanV, dataClean.test.map(d=>d.y)) },
      best:  { train: mse(pBestT, dataNoisy.train.map(d=>d.y)),   test: mse(pBestV, dataNoisy.test.map(d=>d.y)) },
      over:  { train: mse(pOverT, dataNoisy.train.map(d=>d.y)),   test: mse(pOverV, dataNoisy.test.map(d=>d.y)) },
    });
    setPredictions({ clean: { train: pCleanT, test: pCleanV }, best: { train: pBestT, test: pBestV }, over: { train: pOverT, test: pOverV } });
    setHistories({ clean: hClean, best: hBest, over: hOver });
    setTraining(false);
  };

  // Helper to build Chart.js data
  const makeData = (dataset, preds) => ({
    labels: dataset.map(d => d.x.toFixed(2)),
    datasets: [
      { label: "True",      data: dataset.map(d => d.y), fill: false, borderWidth: 1 },
      { label: "Predicted", data: preds,                   fill: false, borderDash: [5,5], borderWidth: 1 }
    ]
  });

  return (
    <div style={{ padding: 20 }}>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://www.bht-berlin.de/fileadmin/oe/pressestelle/dokumente/BHT_Logo_horizontal_Anthrazit_transparent.svg"
              className="h-8"
              alt="bht-logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              FFNN Regression mit TFJS
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={() => setShowDocuModal(true)}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Dokumentation
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Parameter Form */}
      <div className="container mx-auto">
        <div className="flex justify-between">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              generateData();
            }}
            className="grid gap-4 max-w-md bg-white p-4 rounded-lg shadow"
          >
            <h4 className="text-2xl font-bold mb-4">Parameter Konfiguration</h4>
            {[
              {
                id: "N",
                label: "Datensätze N",
                title: "Anzahl der zufällig generierten Datenpunkte N",
              },
              {
                id: "noiseVariance",
                label: "Rausch-Varianz",
                title:
                  "Varianz des zu den Labels hinzugefügten Gaußschen Rauschens",
              },
              {
                id: "trainRatio",
                label: "Train/Test Split",
                title: "Verhältnis von Trainings- zu Testdaten (0–1)",
              },
              {
                id: "learningRate",
                label: "Learning Rate",
                title: "Lernrate für den Adam-Optimizer",
              },
              {
                id: "hiddenUnits",
                label: "Hidden Units",
                title: "Anzahl der Neuronen pro verstecktem Layer",
              },
              {
                id: "batchSize",
                label: "Batch Size",
                title: "Anzahl der Samples pro Trainingsschritt",
              },
              {
                id: "epochsClean",
                label: "Epochs Clean",
                title: "Epochen für rauschfreies Modell",
              },
              {
                id: "epochsBest",
                label: "Epochs Best",
                title: "Epochen für Best-Fit Modell",
              },
              {
                id: "epochsOver",
                label: "Epochs Over",
                title: "Epochen für Overfit-Modell",
              },
            ].map(({ id, label, title }) => (
              <div key={id}>
                <div className="flex items-center" title={title}>
                  <label
                    htmlFor={id}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {label}
                  </label>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                </div>
                <input
                  id={id}
                  name={id}
                  type="number"
                  step={
                    id === "noiseVariance" ||
                    id === "trainRatio" ||
                    id === "learningRate"
                      ? "0.01"
                      : "1"
                  }
                  value={params[id]}
                  onChange={setParams}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                />
              </div>
            ))}
            <div className="flex space-x-2 pt-2">
              <button
                type="submit"
                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                Daten (re)generieren
              </button>
              <button
                type="button"
                onClick={trainModels}
                disabled={training}
                className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50"
              >
                {training ? "Training..." : "Modelle trainieren"}
              </button>
            </div>
          </form>
          <div className="flex-col flex">
            <h4 className="text-2xl font-bold mb-4">Modelle herunterladen</h4>
            {modelBest ? (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => modelBest?.save("downloads://model_best")}
              >
                Download Best-Model
              </button>
            ) : (
              <span>Best Model noch nicht trainiert</span>
            )}
            {modelOver ? (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => modelOver?.save("downloads://model_over")}
              >
                Download Overfit-Model
              </button>
            ) : (
              <span>Overfit Model noch nicht trainiert</span>
            )}
            {modelClean ? (
              <button
                type="button"
                className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => modelClean?.save("downloads://model_clean")}
              >
                Download Clean-Model
              </button>
            ) : (
              <span>Clean Model noch nicht trainiert</span>
            )}
          </div>
        </div>
        {/* Plots... (rest remains same) */}
        <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
          <div style={{ flex: 1 }}>
            <h3 className="text-3xl font-bold">Daten ohne Rauschen</h3>
            <Line
              data={{
                labels: dataClean.train.map((d) => d.x.toFixed(2)),
                datasets: [
                  { label: "Train", data: dataClean.train.map((d) => d.y) },
                  { label: "Test", data: dataClean.test.map((d) => d.y) },
                ],
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <h3 className="text-3xl font-bold">Daten mit Rauschen</h3>
            <Line
              data={{
                labels: dataNoisy.train.map((d) => d.x.toFixed(2)),
                datasets: [
                  { label: "Train", data: dataNoisy.train.map((d) => d.y) },
                  { label: "Test", data: dataNoisy.test.map((d) => d.y) },
                ],
              }}
            />
          </div>
        </div>
        <div ref={firstGraphRef}>
          {(!histories.clean || !histories.best) && !training && (
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-l font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Training starten
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                  Konfiguriere deine Architekture und starte das Tranining, um
                  die Auswertung zusehen.
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0"></div>
              </div>
            </section>
          )}
          {(!histories.clean || !histories.best) && training && (
            <>
              <div className="flex justify-between mb-5">
                <div
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-11/12"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="flex items-baseline mt-4">
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-1/2"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="flex items-baseline mt-4">
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
              <div className="flex justify-between mb-5">
                <div
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-1/2"
                >
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div className="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="flex items-baseline mt-4">
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div className="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div className="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-1/2"
                >
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-baseline mt-4">
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <div class="flex justify-between">
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-1/2"
                >
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-baseline mt-4">
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
                <div
                  role="status"
                  class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700 w-1/2"
                >
                  <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                  <div class="w-48 h-2 mb-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div class="flex items-baseline mt-4">
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
                    <div class="w-full h-56 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full h-64 ms-6 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-72 ms-6 dark:bg-gray-700"></div>
                    <div class="w-full bg-gray-200 rounded-t-lg h-80 ms-6 dark:bg-gray-700"></div>
                  </div>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </>
          )}
          {predictions.clean?.train && (
            <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Clean Train (MSE={losses.clean.train.toFixed(4)})
                </h4>
                <Line
                  data={makeData(dataClean.train, predictions.clean.train)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Clean Test (MSE={losses.clean.test.toFixed(4)})
                </h4>
                <Line data={makeData(dataClean.test, predictions.clean.test)} />
              </div>
            </div>
          )}
          {predictions.clean?.train && losses.best.test && (
            <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Best-Fit Train (MSE={losses.best.train.toFixed(4)})
                </h4>
                <Line
                  data={makeData(dataNoisy.train, predictions.best.train)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Best-Fit Test (MSE={losses.best.test.toFixed(4)})
                </h4>
                <Line data={makeData(dataNoisy.test, predictions.best.test)} />
              </div>
            </div>
          )}
          {predictions.clean?.train && losses.over.train && (
            <div style={{ display: "flex", gap: 20, marginTop: 40 }}>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Over-Fit Train (MSE={losses.over.train.toFixed(4)})
                </h4>
                <Line
                  data={makeData(dataNoisy.train, predictions.over.train)}
                />
              </div>
              <div style={{ flex: 1 }}>
                <h4 className="text-2xl font-bold">
                  Over-Fit Test (MSE={losses.over.test.toFixed(4)})
                </h4>
                <Line data={makeData(dataNoisy.test, predictions.over.test)} />
              </div>
            </div>
          )}
          <AnimatePresence>
            {showDocuModal && (
              <motion.div
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-2xl shadow-xl w-full max-w-[90vw] max-h-[90vh] overflow-y-auto p-6 relative"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                >
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={() => setShowDocuModal(false)}
                  >
                    ✕
                  </button>

                  <h2 className="text-2xl font-semibold mb-4">
                    Dokumentation: FFNN Regression mit TensorFlow.js
                  </h2>
                  <div class="max-w-[90vw] mx-auto bg-white p-6 rounded-lg shadow-lg text-gray-800 width-full overflow-y-auto">
                    <div id="doc-task" class="mb-8">
                      <div class="text-lg font-semibold mb-2">
                        1. Aufgabenstellung
                      </div>
                      <p class="mb-4">
                        Die Aufgabe besteht in der Entwicklung einer
                        Web-Applikation, die:
                      </p>
                      <ul class="list-disc ml-6 space-y-2">
                        <li>
                          Eine unbekannte reellwertige Funktion
                          <br />
                          <code>
                            y(x)=0.5·(x+0.8)(x+1.8)(x-0.2)(x-0.3)(x-1.9)+1
                          </code>{" "}
                          auf <code>[-2,+2]</code> approximiert.
                        </li>
                        <li>
                          Datensätze mit <strong>100</strong> gleichverteilten
                          x-Werten generiert, davon je 50 Train / Test.
                        </li>
                        <li>
                          Jeweils <strong>unverrauscht</strong> und{" "}
                          <strong>verrauscht</strong> (Gaussian Noise,
                          Varianz=0.05).
                        </li>
                        <li>
                          Drei FFNN-Modelle trainiert:
                          <ul class="list-disc ml-6">
                            <li>
                              <em>Clean</em>: ohne Rauschen
                            </li>
                            <li>
                              <em>Best-Fit</em>: wenige Epochen, gute
                              Generalisierung
                            </li>
                            <li>
                              <em>Overfit</em>: viele Epochen, Overfitting
                              sichtbar
                            </li>
                          </ul>
                        </li>
                        <li>
                          Netzwerkarchitektur: 2 Hidden-Layer × 100 Neuronen,
                          ReLU, linearer Output.
                        </li>
                        <li>
                          Optimizer: Adam (LR=0.01), Batch-Size=32, Loss=MSE.
                        </li>
                      </ul>
                    </div>

                    <div id="doc-tech" class="mb-8">
                      <div class="text-lg font-semibold mb-2">
                        2. Technische Grundlagen
                      </div>
                      <p class="mb-4">
                        Verwendete Frameworks und Bibliotheken:
                      </p>
                      <ol class="list-decimal ml-6 space-y-2">
                        <li>
                          <strong>React</strong>: Komponenten, Hooks (
                          <code>useState</code>, <code>useEffect</code>), JSX
                          für UI-Logik.
                        </li>
                        <li>
                          <strong>TensorFlow.js</strong>: Definiert und
                          trainiert neuronale Netze im Browser,
                          Modell-Speicherung via <code>model.save()</code>.
                        </li>
                        <li>
                          <strong>Chart.js / react-chartjs-2</strong>: Erzeugt
                          interaktive Diagramme (Line-Chart für Daten und
                          Vorhersagen).
                        </li>
                        <li>
                          <strong>Tailwind CSS</strong>: Utility-First Styling
                          für Layout, Formulare, Buttons, Modal und
                          Responsivität.
                        </li>
                        <li>
                          <strong>Heroicons</strong>: SVG-Icons für Tooltips und
                          Buttons (<code>InformationCircleIcon</code>).
                        </li>
                      </ol>
                      <p class="mt-4">Weitere Details:</p>
                      <ul class="list-disc ml-6 space-y-2">
                        <li>
                          Daten-Shuffling via <code>tf.util.shuffle</code> auf
                          Array-Kopie.
                        </li>
                        <li>
                          Auto-Scroll nach Training mit <code>ref</code> und{" "}
                          <code>scrollIntoView()</code>, um erste Grafik
                          sichtbar zu machen.
                        </li>
                        <li>
                          Model-Download-Feature: Buttons lösen{" "}
                          <code>model.save('downloads://…')</code> aus.
                        </li>
                        <li>
                          Modal-Komponente zeigt diese Dokumentation über
                          Tailwind-Klassen und Zustand <code>showModal</code>.
                        </li>
                      </ul>
                    </div>

                    <div id="doc-impl" class="mb-8">
                      <div class="text-lg font-semibold mb-2">
                        3. Implementierung
                      </div>
                      <p class="mb-4">Wichtige Code-Snippets:</p>
                      <div class="bg-gray-100 p-4 rounded mb-4 font-mono text-sm overflow-auto">
                        <code>{`// Modell erzeugen
function createFFNN(lr, units) {
  const m = tf.sequential();
  m.add(tf.layers.dense({ units, activation:'relu', inputShape:[1] }));
  m.add(tf.layers.dense({ units, activation:'relu' }));
  m.add(tf.layers.dense({ units:1, activation:'linear' }));
  m.compile({ optimizer: tf.train.adam(lr), loss:'meanSquaredError' });
  return m;
}`}</code>
                      </div>
                      <div class="bg-gray-100 p-4 rounded mb-4 font-mono text-sm overflow-auto">
                        <code>{`// Training & Speicherung
const hist = await model.fit(xs, ys, { epochs, batchSize, validationData });
setTrainedModels(prev => ({ ...prev, best:model }));`}</code>
                      </div>
                      <p>
                        Formular mit Parametern und Tooltips implementiert als:
                      </p>
                      <ul class="list-disc ml-6 space-y-2">
                        <li>
                          Map über Parameter-Definitionen, um DRY-Pattern zu
                          folgen.
                        </li>
                        <li>
                          Info-Icon neben jedem Label für <code>title</code>
                          -Tooltip.
                        </li>
                        <li>Tailwind-Klassen für Fokus-States und Aussehen.</li>
                      </ul>
                    </div>

                    <div id="doc-discussion" class="mb-4">
                      <div class="text-lg font-semibold mb-2">
                        4. Diskussion & Erkenntnisse
                      </div>
                      <ol class="list-decimal ml-6 space-y-2">
                        <li>
                          <strong>Overfitting entfällt ohne Rauschen</strong>,
                          da Model exakt Ground-Truth lernt.
                        </li>
                        <li>
                          <strong>Bias-Variance Tradeoff:</strong> Optimale
                          Epochenzahl minimiert Test-MSE.
                        </li>
                        <li>
                          <strong>Architektur:</strong> Zwei Layer mit 100
                          Neuronen ausreichend – kleinere Netze langsamer.
                        </li>
                        <li>
                          <strong>Interaktivität:</strong> Parameter-Adjust und
                          Download-Funktionen verbessern Usability.
                        </li>
                        <li>
                          <strong>Next Steps:</strong> Einsatz eines
                          Validationssets für automatisches Early-Stopping.
                        </li>
                        <li>
                          <strong>Warum ohne Rauschen kein Overfitting:</strong>
                          Ohne Rauschen liegen alle Trainingspunkte exakt auf
                          der zugrunde liegenden Funktion. Ein ausreichend
                          flexibles Netzwerk kann diese Punkte exakt
                          interpolieren und zugleich exakt auf den Testdaten
                          vorhersagen – es gibt keine „Zufallsschwankungen“, die
                          das Modell auswendig lernen könnte.
                        </li>
                        <li>
                          <strong>Wenig Daten:</strong>
                          Reduziert man die Anzahl der Trainingspunkte deutlich,
                          erkennt man schnell Under- bzw. Overfitting:
                          <ul class="list-disc ml-6">
                            <li>
                              Mit sehr wenigen Punkten kann das Modell nicht
                              genügend Strukturen lernen → hoher Bias
                              (Underfitting).
                            </li>
                            <li>
                              Mit wenigen Punkten und vielen Epochen passt es
                              sich jedem einzelnen rauschartigen Ausreißer zu
                              stark an → hoher Varianz (Overfitting).
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Bestes erzielbares Ergebnis:</strong>
                          Da die Werte bei jeder Generierung unterschiedlich
                          sind, gibt es keinen festen MSE. Üblicherweise
                          erreicht man auf den <em>unverrauschten</em> Daten
                          einen extrem geringen Trainings- und Test-MSE (oft
                          &lt;10<sup>–3</sup>), auf den <em>verrauschten</em>{" "}
                          Daten liegt der Test-MSE typischerweise im Bereich von
                          0.1–0.3, während das Trainings-MSE bei Overfitting bis
                          in den 10<sup>–2</sup>-Bereich fallen kann.
                        </li>
                        <li>
                          <strong>
                            Trainings- vs. Test-Loss &amp; Epocheneinstellung:
                          </strong>
                          – <span class="font-medium">Zu wenige Epochen</span> →
                          Train-Loss ≈ Test-Loss aber beide hoch (Underfitting).
                          –{" "}
                          <span class="font-medium">Mittlere Epochenzahl</span>{" "}
                          → Test-Loss minimal, Train-Loss nur geringfügig tiefer
                          (gute Generalisierung). –{" "}
                          <span class="font-medium">Zu viele Epochen</span> →
                          Train-Loss sehr niedrig, Test-Loss steigt wieder
                          (Overfitting). Eine manuelle Beobachtung der
                          Loss-Kurven hilft, den Sweet-Spot zu finden.
                        </li>
                        <li>
                          <strong>Unabhängigkeit der Testdaten:</strong>
                          Testdaten dürfen niemals zur Training- oder
                          Hyperparameter-Optimierung herangezogen werden – sie
                          müssen vollständig außer Konkurrenz bleiben. Für
                          automatisches Early-Stopping nutzt man üblicherweise
                          ein drittes <em>Validations-Set</em>, das hier
                          zugunsten der Übersichtlichkeit ausgelassen wurde.
                        </li>
                      </ol>
                    </div>
                  </div>

                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                    onClick={() => setShowDocuModal(false)}
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

