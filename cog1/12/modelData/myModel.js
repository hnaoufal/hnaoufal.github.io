/**
 * 3D Data Store for a model.
 * Missing properties/arrays (commented out)
 * are mixed in from data module.
 *
 * @namespace cog1.data
 * @module myModel
 */
define(["exports", "data"], function (exports, data) {
  "use strict";

  /**
   * Create an instance of the model defined in this module.
   *
   * @parameter object with fields:
   * @parameter scale is the edge length of the myModel.
   * @returns instance of this model.
   */
  exports.create = function (parameter = {}) {
    const instance = {};
    const scale = parameter.scale || 20;

    instance.vertices = vertices;
    instance.polygonVertices = faces;
    instance.polygonColors = faces.map(() => 11);
    // instance.polygonColors = faces.map(() => (Math.random() * 10) | 0);

    data.applyScale.call(instance, scale);

    return instance;
  };
});

const zaunHoehe = 5;

const generateZaun = (anzahl, abstand) => {
  const zaunG = [
    [0 + abstand, 0, 0 ],
    [1 + abstand, 0, 0 ],
    [1 + abstand, 0, 1 ],
    [0 + abstand, 0, 1 ],
  ];

  const zaunT = [];
  const zaunW = [];
  let iterator = 0;

  let tmp = 0;
  for (let i = Math.random()/1; i < zaunHoehe; i += Math.random()/1) {
    zaunT.push(...zaunG.map(a => [a[0] + tmp, a[1] + i, a[2] + tmp]));
    tmp = Math.random()/11;
    iterator++;
  }

  let correctF = [];
  let finalIx = 0;

  for (let i = 0; i < (iterator + 1) / 2 - 1 ; i++) {
    const f = i * 8;

    const faces = [
      [0 + anzahl, 1 + anzahl, 5 + anzahl, 4 + anzahl],
      [1 + anzahl, 2 + anzahl, 6 + anzahl, 5 + anzahl],
      [2 + anzahl, 3 + anzahl, 7 + anzahl, 6 + anzahl],
      [3 + anzahl, 0 + anzahl, 4 + anzahl, 7 + anzahl],

      [4 + anzahl, 5 + anzahl, 9 + anzahl, 8 + anzahl],
      [5 + anzahl, 6 + anzahl, 10 + anzahl, 9 + anzahl],
      [6 + anzahl, 7 + anzahl, 11 + anzahl, 10 + anzahl],
      [7 + anzahl, 4 + anzahl, 8 + anzahl, 11 + anzahl],
    ];

    correctF.push(...faces.map((a, i) => {
      return a.map(b => b + f)
    }));
    finalIx = i;
  }

  let finalFaces = [];

  if (iterator % 2 !== 0) {
    finalFaces.push(...[
      [0 + anzahl, 1 + anzahl, 5 + anzahl, 4 + anzahl],
      [1 + anzahl, 2 + anzahl, 6 + anzahl, 5 + anzahl],
      [2 + anzahl, 3 + anzahl, 7 + anzahl, 6 + anzahl],
      [3 + anzahl, 0 + anzahl, 4 + anzahl, 7 + anzahl],
    ].map(a => a.map(b => b + (finalIx + 1) * 8)));
  }

  const firstF = [0 + anzahl, 1 + anzahl, 2 + anzahl, 3 + anzahl];
  const lastF = [zaunT.length + anzahl - 4, zaunT.length + anzahl - 3, zaunT.length + anzahl - 2, zaunT.length + anzahl - 1];


  const kopfV = [
    [0.5 + abstand, zaunHoehe + 0.5, 0.5],
  ]

  const vertices = [...zaunG, ...zaunT, ...kopfV];

  const kopf = [
    [vertices.length - 5 + anzahl,vertices.length - 4 + anzahl,vertices.length - 1 + anzahl],
    [vertices.length - 4 + anzahl,vertices.length - 3 + anzahl,vertices.length - 1 + anzahl],
    [vertices.length - 3 + anzahl,vertices.length - 2 + anzahl,vertices.length - 1 + anzahl],
    [vertices.length - 2 + anzahl,vertices.length - 5 + anzahl,vertices.length - 1 + anzahl],
  ];
  zaunW.push(firstF, ...correctF, lastF, ...finalFaces, ...kopf);
  return { zaunVertices: vertices, zaunFaces: zaunW };
}

const zaun1 = generateZaun(0, -10);
console.log(zaun1.zaunFaces.length)
const zaun2 = generateZaun(zaun1.zaunFaces.length -1, -5);
console.log(zaun2.zaunFaces.length)
const zaun3 = generateZaun(zaun1.zaunFaces.length + zaun2.zaunFaces.length - 2, 0);
const zaun4 = generateZaun(zaun1.zaunFaces.length + zaun2.zaunFaces.length + zaun3.zaunFaces.length - 3, 5);
const zaun5 = generateZaun(zaun1.zaunFaces.length + zaun2.zaunFaces.length + zaun3.zaunFaces.length + zaun4.zaunFaces.length - 4, 10);
const zaun6 = generateZaun(zaun1.zaunFaces.length + zaun2.zaunFaces.length + zaun3.zaunFaces.length + zaun4.zaunFaces.length + zaun5.zaunFaces.length - 5, 15);

const anzahl = zaun1.zaunFaces.length + zaun2.zaunFaces.length + zaun3.zaunFaces.length + zaun4.zaunFaces.length + zaun5.zaunFaces.length + zaun6.zaunFaces.length - 6;

function rotateZ(p, angle) {
  const [x, y, z] = p;

  return [
    x * Math.cos(angle) - y * Math.sin(angle),
    y * Math.cos(angle) + x * Math.sin(angle),
    z]
}

const zaunBalken = (num, angle) => ([
  rotateZ([0.5 + num, 2, 1 ], angle),
  rotateZ([0.5 + num, 2, 1.5 ], angle),
  rotateZ([0.5 + num, 3, 1.5 ], angle),
  rotateZ([0.5 + num, 3, 1 ], angle),
  rotateZ([5.5 + num, 2, 1 ], angle),
  rotateZ([5.5 + num, 2, 1.5 ], angle),
  rotateZ([5.5 + num, 3, 1.5 ], angle),
  rotateZ([5.5 + num, 3, 1 ], angle),
])

const zaunBalkenF = (num) => ([
  [anzahl + num, anzahl + 1 + num, anzahl + 2 + num, anzahl + 3 + num],
  [anzahl + num + 4, anzahl + 5 + num, anzahl + 6 + num, anzahl + 7 + num],

  [anzahl + num, anzahl + 1 + num, anzahl + 5 + num, anzahl + 4 + num],
  [anzahl+1 + num, anzahl+2 + num, anzahl + 6 + num, anzahl + 5 + num],
  [anzahl+2 + num, anzahl+3 + num, anzahl + 7 + num, anzahl + 6 + num],
  [anzahl+3 + num, anzahl + num, anzahl + 4 + num, anzahl + 7 + num],
])

const vertices = [
  ...zaun1.zaunVertices,
  ...zaun2.zaunVertices,
  ...zaun3.zaunVertices,
  ...zaun4.zaunVertices,
  ...zaun5.zaunVertices,
  ...zaun6.zaunVertices,
  ...zaunBalken(0, 0.05),
  ...zaunBalken(5, -0.05),
  ...zaunBalken(10, 0.07),
  ...zaunBalken(-5, -0.03),
  ...zaunBalken(-10, 0.01),
];
const faces = [
  ...zaun1.zaunFaces,
  ...zaun2.zaunFaces,
  ...zaun3.zaunFaces,
  ...zaun4.zaunFaces,
  ...zaun5.zaunFaces,
  ...zaun6.zaunFaces,
  ...zaunBalkenF(0),
  ...zaunBalkenF(8),
  ...zaunBalkenF(16),
  ...zaunBalkenF(24),
  ...zaunBalkenF(32),
];

console.log(vertices, faces)
