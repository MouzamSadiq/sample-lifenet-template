export const data_structure =
  // For schematic_image_id = 1
  {
    general_information: [
      {
        type: "schematic-info",
        properties: [
          {
            id: 0,
            label: "Label_1",
            value: "Value_1",
            unit: "Unit",
            isEditable: true,
          },
          {
            id: 0,
            label: "Label_1",
            value: "Value_1",
            unit: "Unit",
            isEditable: true,
          },
        ],
      },
      {
        type: "schematic-info",
        property_name: "AORTOILIAC ARTERY", // We can consider this field in all object if we have more than one image on a single template
        properties: {
          id: 2,
          label: "Date_of_death",
          value: "Value_",
          unit: "Unit",
          isEditable: true,
        },
      },
    ],
    schematic_drawing_informations: [
      {
        type: "tool_1", // Type is to distinguish which tool is used so based on that shapes can be rendered.
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
      },
      {
        type: "tool_2",
        properties: {
          id: 18,
          x: "79",
          y: "262",
          label: "Label_3",
          value: "Value_3",
          unit: "Unit",
          isEditable: true,
        },
      },
    ],
  };
// ---------------------------------------------------

// const template_1_payload = [
//   {
//     id: "",
//     url: "",
//     general_information: [
//       {
//         type: "type1",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "graft_identification_number",
//             value: "2211111-0001",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "recorded_by",
//             value: "C.Waygor",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "AORTOILIAC_ARTERY(AI)_GRAFT_CODE",
//             value: "AI1222",
//             unit: null,
//             is_editable: false,
//           },
//         ],
//       },
//       {
//         type: "type2",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "Aortic_Flaccid_Diameter(ID)",
//             value: "",
//             unit: "mm",
//             is_editable: true,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Aortic_Distended_Diameter(OD)",
//             value: "",
//             unit: "mm",
//             is_editable: true,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Total_Flaccid_Length",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//           },
//         ],
//       },
//     ],
//     schematic_information: [
//       {
//         type: "straight_arrow",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Celiac Trunk",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "SMA",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "diverted_arrow",
//         properties: [
//           {
//             x: 98,
//             y: 430,
//             label: "Aortic Length",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "double_headed_arrow",
//         properties: [
//           {
//             x: 106,
//             y: 423,
//             label: "Right Iliac",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_double_Headed_arrow",
//         properties: [
//           {
//             x: 619,
//             y: 428,
//             label: "SMA",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "bend_arrow_head",
//         properties: [
//           {
//             x: 159,
//             y: 348,
//             label: "Right Renal",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_bend_arrow_head",
//         properties: [
//           {
//             x: 567,
//             y: 357,
//             label: "Left Renal",
//             value: "",
//             unit: "cm",
//             is_editable: true,
//             is_applicable: true,
//           },
//         ],
//       },
//     ],
//   },
// ];
// const template_2_Aortic_Valve_Conduit_Observations_payload = [
//   {
//     id: "",
//     url: "",
//     general_information: [
//       {
//         type: "type1",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "graft_identification_number",
//             value: "2211111-0001",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "recorded_by",
//             value: "C.Waygor",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Date",
//             value: "",
//             unit: null,
//             is_editable: false,
//           },
//         ],
//       },
//       {
//         type: "type2",
//         properties: [],
//       },
//     ],
//     schematic_information: [
//       {
//         type: "straight_arrow_medium",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow_medium",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "Internal Annulus",
//             value: "",
//             unit: "Size (mm)",
//             is_editable: true,
//           },
//         ],
//       },
//     ],
//   },
// ];
// const template_3_ASCENDING_AORTA_payload = [
//   {
//     id: "",
//     url: "",
//     general_information: [
//       {
//         type: "type1",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "graft_identification_number",
//             value: "2211111-0001",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "recorded_by",
//             value: "C.Waygor",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Date",
//             value: "",
//             unit: null,
//             is_editable: false,
//           },
//         ],
//       },
//       {
//         type: "type2",
//         properties: [],
//       },
//     ],
//     schematic_information: [
//       {
//         type: "straight_arrow_medium",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow_medium",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "Internal Annulus",
//             value: "",
//             unit: "Size (mm)",
//             is_editable: true,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const template_4_Pulmonary_Artery_Conduit_payload = [
//   {
//     id: "",
//     url: "",
//     general_information: [
//       {
//         type: "type1",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "graft_identification_number",
//             value: "2211111-0001",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "recorded_by",
//             value: "C.Waygor",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Date",
//             value: "",
//             unit: null,
//             is_editable: false,
//           },
//         ],
//       },
//       {
//         type: "type2",
//         properties: [],
//       },
//     ],
//     schematic_information: [
//       {
//         type: "straight_arrow",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "Internal Annulus",
//             value: "",
//             unit: "Size (mm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "RPA",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "LPA",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//     ],
//   },
// ];

// const template_5_Pulmonary_Valve_conduit_observations_payload = [
//   {
//     id: "",
//     url: "",
//     general_information: [
//       {
//         type: "type1",
//         properties: [
//           {
//             x: null,
//             y: null,
//             label: "graft_identification_number",
//             value: "2211111-0001",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "recorded_by",
//             value: "C.Waygor",
//             unit: null,
//             is_editable: false,
//           },
//           {
//             x: null,
//             y: null,
//             label: "Date",
//             value: "",
//             unit: null,
//             is_editable: false,
//           },
//         ],
//       },
//       {
//         type: "type2",
//         properties: [],
//       },
//     ],
//     schematic_information: [
//       {
//         type: "straight_arrow",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit Left ",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "straight_arrow",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit Right  ",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "straight_arrow",
//         properties: [
//           {
//             x: 178,
//             y: 242,
//             label: "Conduit Midline",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "Internal Annulus",
//             value: "",
//             unit: "Size (mm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "RPA",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//       {
//         type: "inverted_straight_arrow",
//         properties: [
//           {
//             x: 523,
//             y: 282,
//             label: "LPA",
//             value: "",
//             unit: "Length (cm)",
//             is_editable: true,
//           },
//         ],
//       },
//     ],
//   },
// ];

const Real_AI_TemplateStrcture = {
  annotations: {
    id: "string",
    name: "Aortoiliac Artery",
    image: "AORTOILIAC_ARTERY.svg",
    general_information: [
      {
        type: "generalInformations",
        properties: [
          {
            x: 0,
            y: 0,
            label: "Aortic Flaccid Diameter(ID)",
            value: "0",
            unit: "mm",
            is_editable: true,
            is_applicable: true,
          },
          {
            x: 0,
            y: 0,
            label: "Aortic Distended Diameter(OD)",
            value: "0",
            unit: "mm",
            is_editable: true,
            is_applicable: true,
          },
          {
            x: 0,
            y: 0,
            label: "Total Flaccid Length",
            value: "0",
            unit: "cm",
            is_editable: true,
            is_applicable: true,
          },
          {
            x: 0,
            y: 0,
            label: "Total Distended Length",
            value: "0",
            unit: "cm",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
    ],
    schematic_information: [
      {
        type: "straight_arrow",
        properties: [
          {
            x: 434,
            y: 185,
            label: "Right Renal",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "inverted_straight_arrow",
        properties: [
          {
            x: 834,
            y: 187,
            label: "Left Renal",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "dotted_diverted_arrow",
        properties: [
          {
            x: 342,
            y: 299,
            label: "Aortic Length",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "double_headed_arrow",
        properties: [
          {
            x: 356,
            y: 318,
            label: "Right Iliac",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "inverted_dotted_diverted_arrow",
        properties: [
          {
            x: 939,
            y: 297,
            label: "Distended AA",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "inverted_double_Headed_arrow",
        properties: [
          {
            x: 909,
            y: 316,
            label: "Left Iliac",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "downward_bend_arrow_head",
        properties: [
          {
            x: 380,
            y: 106,
            label: "SMA",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
      {
        type: "downward_inverted_bend_arrow_head",
        properties: [
          {
            x: 901,
            y: 61,
            label: "Celiac Trunk",
            value: "0",
            unit: "Length (cm)",
            is_editable: true,
            is_applicable: true,
          },
        ],
      },
    ],
  },
  image:
    "http://azurite:10000/devstoreaccount1/lnhdata/5a84c47c-1178-4341-aaa7-1d86206b1fee?se=2023-08-18T20%3A37%3A06Z&sp=w&sv=2022-11-02&sr=b&sig=esbdW7jmylmLJCbdg4gPRGftCliZXA91qgZJnHfaktI%3D",
};
