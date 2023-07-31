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
