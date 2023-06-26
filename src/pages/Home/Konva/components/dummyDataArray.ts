export const initialArrowShapes = [
  {
    x: 1002.711798589766,
    y: 398.0000000000004,
    fill: "black",
    draggable: false,
    id: Math.random().toString(16).slice(2),
    points: [131, 0, 0, 0],
  },
];

export const initialTextTemplate = [
  {
    x: 1041.0023112302706,
    y: 401.0000000000004,
    fontSize: 20,
    fill: "black",
    id: Math.random().toString(16).slice(2),
    customText: "Left Renal",
    isEditing: true,
    draggable: false,
    isFromTemplate: true,
    scaleX: 1,
  },
  {
    x: 1104.0023112302706,
    y: 376.0000000000004,
    fontSize: 20,
    fill: "black",
    id: Math.random().toString(16).slice(2),
    customText: "cm",
    isEditing: true,
    draggable: false,
    isFromTemplate: true,
  },
  {
    x: 779,
    y: 430,
    fontSize: 20,
    fill: "black",
    id: Math.random().toString(16).slice(2),
    customText: "Right Renal",
    isEditing: true,
    draggable: false,
    isFromTemplate: true,
  },
  {
    x: 857,
    y: 403,
    fontSize: 20,
    fill: "black",
    id: Math.random().toString(16).slice(2),
    customText: "cm",
    isEditing: true,
    draggable: false,
    isFromTemplate: true,
  },
];

export const initialCustomArrowTemplate = [
  {
    x: 889.0023112302707,
    y: 425.0000000000004,
    fill: "black",
    draggable: false,
    id: Math.random().toString(16).slice(2),
    points: [-112, 0, 0, 0, 37.6, -22],
  },
];

// New grouped Annotation array structure .

const annotationArray_1 = [
  {
    id: 1,
    x: "500",
    y: "200",
    isDraggable: false,
    items: [
      {
        texts: {
          label: "Label_1",
          value: "Value_1",
          unit: "Unit",
        },
        arrowShapes: {
          points: [10, 10, 20, 20],
          isTransformable: true,
        },
      },
    ],
  },
];

const data = [
  {
    id: 1,
    x: "500",
    y: "200",
    type: "annotation",
    isEditable: true,
    isDragable: false,
    properties: [
      {
        label: "Label_1",
        value: "Value_1",
        unit: "Unit",
      },
    ],
  },
  {
    id: 2,
    x: "800",
    y: "400",
    type: "annotation",
    isEditable: true,
    isDragable: false,
    properties: [
      {
        label: "Label_2",
        value: "Value_2",
        unit: "Unit",
      },
    ],
  },
  {
    id: 18,
    x: "10",
    y: "80",
    type: "documents",
    isEditable: true,
    isDragable: false,
    properties: [
      {
        header_label: "Label",
        description: "Texts",
      },
    ],
  },
];

const templateData_1 = {
  id: 1,
  x: "500",
  y: "200",
  isDraggable: false,
  items: [
    {
      label: "Label_1",
      value: "Value_1",
      unit: "Unit",
    },
  ],
};
