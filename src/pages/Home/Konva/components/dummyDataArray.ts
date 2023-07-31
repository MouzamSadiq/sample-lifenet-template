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
    fontSize: 16,
    // fill: "black",
    id: Math.random().toString(16).slice(2),
    customText: "Left Renal",
    isEditing: true,
    draggable: false,
    isFromTemplate: true,
    // scaleX: 1,
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
    properties: [
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

export const data_type_1 = [
  // For schematic_image_id = 1
  {
    id: 0,
    type: "schematic-info",
    properties: {
      label: "Label_1",
      value: "Value_1",
      isEditable: true,
    },
  },
  {
    id: 2,
    type: "schematic-info",
    property_name: "AORTOILIAC ARTERY", // We can consider this field if we have more than one image on a single template
    properties: {
      label: "Date_of_death",
      value: "Value_",
      isEditable: true,
    },
  },
  {
    id: 1,
    x: "512",
    y: "175",
    type: "tool_1",
    isDragable: false,
    properties: {
      label: "Label_1",
      value: "Value_1",
      unit: "Unit",
      isEditable: true,
    },
  },
  {
    id: 2,
    x: "155",
    y: "179",
    type: "tool_1",
    isDragable: false,
    properties: {
      label: "Label_2",
      value: "Value_2",
      unit: "Unit",
      isEditable: true,
    },
  },
  {
    id: 18,
    x: "79",
    y: "262",
    type: "tool_2",
    isDragable: false,
    properties: {
      label: "Label_3",
      value: "Value_3",
      unit: "Unit",
      isEditable: true,
    },
  },
];

export const data_type_2 =
  // For schematic_image_id = 1
  {
    general_information: [
      {
        id: 0,
        type: "schematic-info",
        properties: {
          label: "Label_1",
          value: "Value_1",
          isEditable: true,
        },
      },
      {
        id: 2,
        type: "schematic-info",
        property_name: "AORTOILIAC ARTERY", // We can consider this field if we have more than one image on a single template
        properties: {
          label: "Date_of_death",
          value: "Value_",
          isEditable: true,
        },
      },
    ],
    schematic_drawing_informations: [
      {
        id: 1,
        x: "512",
        y: "175",
        type: "tool_1",
        isDragable: false,
        properties: {
          label: "Label_1",
          value: "Value_1",
          unit: "Unit",
          isEditable: true,
        },
      },
      {
        id: 2,
        x: "155",
        y: "179",
        type: "tool_1",
        isDragable: false,
        properties: {
          label: "Label_2",
          value: "Value_2",
          unit: "Unit",
          isEditable: true,
        },
      },
      {
        id: 18,
        x: "79",
        y: "262",
        type: "tool_2",
        isDragable: false,
        properties: {
          label: "Label_3",
          value: "Value_3",
          unit: "Unit",
          isEditable: true,
        },
      },
    ],
    custom_schematic_drawing_informations: [{}],
  };

export const data_type_3 = {
  type: "tool_1", // Type is to distinguish which tool is used so based on that shapes will be rendered.
  isDragable: false,
  properties: [
    {
      id: 1,
      x: "512",
      y: "175",
      label: "Label_1",
      value: "Value_1",
      unit: "Unit",
      isEditable: true,
    },
    {
      id: 2,
      x: "1512",
      y: "885",
      label: "Label_2",
      value: "Value_2",
      unit: "Unit",
      isEditable: true,
    },
  ],
};
