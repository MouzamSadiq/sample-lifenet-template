/* eslint-disable @typescript-eslint/no-unused-vars */
import { Box, Button } from "@mui/material";
import React, { useRef, useEffect, useState, useCallback } from "react";
import {
  Stage,
  Layer,
  Group,
  Rect,
  Arrow,
  Text,
  RegularPolygon,
  Line,
} from "react-konva";
import { Html } from "react-konva-utils";
import {
  ArrowShapeProps,
  CustomArrowProps,
  ShadingToolProps,
  TextShapeProps,
} from "./types";
import {
  initialArrowShapes,
  initialCustomArrowTemplate,
  initialTextTemplate,
} from "./components/dummyDataArray";
import { ArrowShape } from "./components/draggedToolShapes/ArrowShape";
import { TextShape } from "./components/draggedToolShapes/TextShape";
import { ShadingShape } from "./components/draggedToolShapes/ShadingShape";
import { CustomArrowShape } from "./components/draggedToolShapes/CustomArrowShape";
import { URLImage } from "./components/URLImage";
import Toolbar from "../../../components/Toolbar";
import { jsPDF } from "jspdf";
import { CoPresentOutlined } from "@mui/icons-material";

const KonvaGround: React.FC = () => {
  // useEffect(() => {
  //   const handleResize = () => {
  //     setStageWidth(window.innerWidth);
  //     setStageHeight(window.innerHeight);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const params = new URLSearchParams(window.location.search);
  const annotate = params.get("annotate");
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);
  // console.log("Screeennn inners????????", stageWidth, stageHeight);

  // UseStates for Shapes on CV image
  const [loadTemplate, setLoadTemplate] = useState<boolean>(false);
  const [arrows, setArrows] = useState<ArrowShapeProps[]>([]);
  const [texts, setTexts] = useState<TextShapeProps[]>([]);
  const [shades, setShades] = useState<ShadingToolProps[]>([]);
  const [customShapes, setCustomShapes] = useState<CustomArrowProps[]>([]);
  // console.log({ arrows });
  // console.log({ texts });
  // console.log({ customShapes });

  const [selectedArrowId, selectArrowShape] = useState<string | null>(null);
  const [selectedTextId, selectTextShape] = useState<string | null>(null);
  const [selectedShadeId, setSelectShadeId] = useState<string | null>(null);
  const [selectedCustomShapeId, setSelectedCustomShapeId] = useState<
    string | null
  >(null);

  const toolbarArrowReference = useRef<any>(null);
  const toolbarDraggableTextRef = useRef<any>(null);
  const toolbarShadeRef = useRef<any>(null);
  const toolbarCustomShapeRef = useRef<any>(null);

  const stageRef = useRef<any>(null);

  const headerRef = useRef<any>(null);
  console.log(headerRef.current);
  useEffect(() => {
    if (loadTemplate) {
      setArrows(initialArrowShapes);
      setTexts(initialTextTemplate);
      setCustomShapes(initialCustomArrowTemplate);
    } else {
      setArrows([]);
      setTexts([]);
      setCustomShapes([]);
    }
  }, [loadTemplate, stageWidth]);

  const checkDeselect = (e: any) => {
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectArrowShape(null);
      selectTextShape(null);
      setSelectShadeId(null);
      setSelectedCustomShapeId(null);
    }
  };

  const toolbarWidth = 555; // Default  toolbar size
  const toolbarHeight = 77.5;
  const toolbarX = (stageWidth - toolbarWidth) / 2;
  const toolbarY = 5;

  // --------- Toolbar Arrow Drag function-----
  const handleArrowDragEnds = () => {
    const draggableArrow = toolbarArrowReference.current;
    const newArrow: ArrowShapeProps = {
      x: draggableArrow.getStage().getPointerPosition().x,
      y: draggableArrow.getStage().getPointerPosition().y,
      fill: "black",
      draggable: true,
      id: Math.random().toString(16).slice(2),
      points: [-100, 0, 0, 0],
    };

    // Reset draggableArrow position
    draggableArrow.setAttrs({
      x: 0,
      y: 0,
    });

    setArrows([...arrows, newArrow]);
    selectArrowShape(newArrow.id);
  };

  // --------- Toolbar Text Dragfunction-----
  const handleTextDragEnd = () => {
    const draggableText = toolbarDraggableTextRef.current;

    const newText: any = {
      x: draggableText.getStage().getPointerPosition().x,
      y: draggableText.getStage().getPointerPosition().y,
      fontSize: 16,
      fill: "black",
      id: Math.random().toString(16).slice(2),
      customText: "Text",
      isEditing: true,
      draggable: true,
    };

    draggableText.setAttrs({
      x: toolbarX + toolbarWidth / 2,
      y: toolbarY + toolbarHeight / 2.5,
    });
    setTexts([...texts, newText]);
  };

  // --------- Toolbar Text Dragfunction-----
  const handleShadeDragEnd = () => {
    const draggableShade = toolbarShadeRef.current;

    const newShade: ShadingToolProps = {
      x: draggableShade.getStage().getPointerPosition().x - 12,
      y: draggableShade.getStage().getPointerPosition().y,
      width: 40,
      height: 30,
      fill: "black",
      stroke: "black",
      opacity: 0.2,
      strokeWidth: 1,
      shadowBlur: 5,
      id: Math.random().toString(16).slice(2),
    };

    draggableShade.setAttrs({
      x: toolbarX + toolbarWidth / 1.4,
      y: toolbarY + toolbarHeight / 2.5,
    });

    setShades([...shades, newShade]);
    setSelectShadeId(newShade.id);
  };

  const handleCustomShapeDragEnd = () => {
    const draggableCustomShape = toolbarCustomShapeRef.current;
    const newCustomShape: CustomArrowProps = {
      x: draggableCustomShape.getStage().getPointerPosition().x,
      y: draggableCustomShape.getStage().getPointerPosition().y,
      fill: "black",
      draggable: true,
      id: Math.random().toString(16).slice(2),
      points: [-60, 0, 0, 0, 20, -22],
    };

    draggableCustomShape.setAttrs({
      x: 0,
      y: 0,
    });

    setCustomShapes([...customShapes, newCustomShape]);

    setSelectedCustomShapeId(newCustomShape.id);
  };

  const handleTextChange = (textId: string, newText: string) => {
    const updatedTexts = texts.map((text) => {
      if (text.id === textId) {
        return {
          ...text,
          customText: newText,
        };
      }
      return text;
    });
    setTexts(updatedTexts);
  };

  // This is too keep points responsive

  const adjustCoordinates = () => {
    const initialScreenWidth = 1920;
    const initialScreenHeight = 929;

    const newScreenX = initialScreenWidth / stageWidth;
    const newScreenY = initialScreenHeight / stageHeight;

    const adjustedArrows = initialArrowShapes.map((arrow) => {
      const adjustedX = arrow.x / newScreenX;
      const adjustedY = arrow.y / newScreenY;

      return {
        ...arrow,
        x: adjustedX,
        y: adjustedY,
      };
    });

    const adjustedTexts = initialTextTemplate.map((text) => {
      const adjustedX = text.x / newScreenX;
      const adjustedY = text.y / newScreenY;

      return {
        ...text,
        x: adjustedX,
        y: adjustedY,
      };
    });

    const adjustedCustomArrow = initialCustomArrowTemplate.map((shape) => {
      const adjustedX = shape.x / newScreenX;
      const adjustedY = shape.y / newScreenY;

      return {
        ...shape,
        x: adjustedX,
        y: adjustedY,
      };
    });
    setTexts(adjustedTexts);
    setCustomShapes(adjustedCustomArrow);
    setArrows(adjustedArrows);

    return null;
  };

  useEffect(() => {
    if (loadTemplate) {
      adjustCoordinates();
    }
  }, [stageWidth, stageHeight]);

  //Basic Delete Functionalities
  const deleteArrowShape = () => {
    if (selectedArrowId) {
      const updatedArrows = arrows.filter(
        (arrow) => arrow.id !== selectedArrowId
      );
      setArrows(updatedArrows);
      selectArrowShape(null);
    }
  };

  //Basic PDF Export functonality
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#button");
    console.log(data);
    pdf.html(data).then(() => {
      console.log("dhdhdh");
    });
  };
  const handleExportToPDF = async () => {
    const stage = stageRef.current;
    const pdf = new jsPDF("portrait", "pt", "a4");

    const layerToHide = stage.find("#layerToHide")[0];

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    layerToHide.hide();

    const dataURL = stage.toDataURL({ pixelRatio: 1 });

    layerToHide.show();

    const imageWidth = pdfWidth;
    const imageHeight = 200;

    const xPos = (pdfWidth - imageWidth) / 2;
    const yPos = (pdfHeight - imageHeight) / 2;
    const data = await document.querySelector("#pdf");

    pdf.html(data).then(() => {
      pdf.addImage(dataURL, 85, 200);
      pdf.save("cvdfghdfh.pdf");
    });
    // pdf.addImage(dataURL, 0, 0).then(() => {
    //   pdf.html(data).save("cvdfghdfh.pdf");
    // });

    // pdf.save("exported_cv_image.pdf");
  };

  const handleZoom = useCallback(
    (direction: number = 1) => {
      if (!stageRef.current) return;
      const scaleBy = 1.05;
      const stage = stageRef.current;
      // const pointer = stage?.getPointerPosition();
      if (stage) {
        const oldScale = stage.scaleX();
        if (oldScale < 0.5 && direction < 0) return;
        if (oldScale > 2 && direction > 0) return;

        const newScale =
          direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

        const scaleVal = { x: newScale, y: newScale };
        stage.scale(scaleVal);
      }
    },
    [stageRef]
  );
  const x = 50;
  const y = 100;
  const width = 150;
  const headLength = 30;
  const head1X = x + width + headLength;
  const head1Y = y - 50;
  const head2X = 230;
  const head2Y = 150;

  const TextRef = useRef<any>();

  const UpwardInvertBendArrowHead: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    const arrowPoints = [35, 0, 150, 0, 170, -25];
    return (
      <Group draggable x={567} y={357} id={"upward_inverted_bend_arrow_head"}>
        <Arrow points={arrowPoints} fill="black" stroke="black" scaleX={-1} />
        <Text
          x={-65}
          y={-20}
          text="Left Renal"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-125}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-65}
          y={10}
          text="CM"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
      </Group>
    );
  };
  const UpwardBendArrowHead: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    const arrowPoints = [35, 0, 150, 0, 170, -25];
    return (
      <Group draggable x={159} y={348} id={"upward_bend_arrow_head"}>
        <Arrow points={arrowPoints} fill="black" stroke="black" />
        <Text
          x={35}
          y={-20}
          text="Right Renal"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={15}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={65}
          y={10}
          text="CM"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
      </Group>
    );
  };
  const DownwardBendArrowHead: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    const arrowPoints = [-35, 0, 150, 0, 250, 45];
    return (
      <Group draggable x={109} y={234} id={"downward_bend_arrow_head"}>
        <Arrow points={arrowPoints} fill="black" stroke="black" />
        <Text
          x={-35}
          y={-20}
          text="SMA"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={68}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-35}
          y={10}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
      </Group>
    );
  };
  const DownwardInvertedBendArrowHead: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    const arrowPoints = [0, 0, 200, 0, 250, 35];
    return (
      <Group draggable x={627} y={196} id={"downward_inverted_bend_arrow_head"}>
        <Arrow points={arrowPoints} fill="black" stroke="black" scaleX={-1} />
        <Text
          x={-99}
          y={-20}
          text="Celiac Trunk"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-35}
          y={9}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-136}
          y={9}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
      </Group>
    );
  };

  const DoubleHeadArrow: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    return (
      <Group draggable x={73} y={457} id={"double_headed_arrow"}>
        <Arrow points={[-2, 100, 200, 100]} fill="black" stroke="black" />
        <Line points={[140, 100, 140, 150]} stroke="black" strokeWidth={2} />
        <RegularPolygon
          sides={3}
          radius={10}
          fill="black"
          x={140}
          y={150}
          rotation={60}
        />
        <Text
          x={0}
          y={80}
          text="Right Iliac"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={90}
          y={110}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={0}
          y={110}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
      </Group>
    );
  };
  const InvertedDoubleHeadArrow: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    return (
      <Group draggable x={647} y={459} id={"inverted_double_Headed_arrow"}>
        <Arrow
          points={[-20, 100, 200, 100]}
          fill="black"
          stroke="black"
          scaleX={-1}
        />
        <Line
          points={[140, 100, 140, 150]}
          stroke="black"
          strokeWidth={2}
          scaleX={-1}
        />
        <RegularPolygon
          sides={3}
          radius={10}
          fill="black"
          x={-140}
          y={150}
          rotation={60}
        />
        <Text
          x={-50}
          y={80}
          text="Left Iliac"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={0}
          y={110}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={-97}
          y={110}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
      </Group>
    );
  };

  const DivertedArrow = () => {
    const arrowPoints = [35, 0, 150, 0, 200, -25];
    return (
      <Group draggable x={98} y={430} id={"diverted_arrow"}>
        <Arrow points={arrowPoints} fill="black" stroke="black" />
        <Arrow points={[150, 0, 200, 30]} fill="black" stroke="black" />

        <Text
          x={5}
          y={-25}
          text="Aortic Length"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={5}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={55}
          y={10}
          text="CM"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
      </Group>
    );
  };
  const DottedDivertedArrow: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    // const arrowPoints = [35, 0, 150, 0, 200, -25];
    const arrowPoints = [35, 0, 150, 0, 150, 50, 200, 50];
    const linePoints = [190, 0, 0, 0];
    return (
      <Group draggable x={73} y={429} id={"dotted_diverted_arrow"}>
        <Line points={linePoints} stroke="black" strokeWidth={2} />
        <Arrow
          points={[190, 0, 190, 50, 250, 50]}
          fill="black"
          stroke="black"
          dash={[10, 5]}
        />
        <Arrow
          points={[190, 0, 190, -50, 250, -50]}
          fill="black"
          stroke="black"
          dash={[10, 5]}
        />

        <Text
          x={0}
          y={-25}
          text="Aortic Length"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={97}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
        <Text
          x={0}
          y={10}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
        />
      </Group>
    );
  };

  const StraightArrow: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    return (
      <Group draggable x={164} y={318} id={"straight_arrow"}>
        <Text
          x={-91}
          y={-21}
          text="Right Renal"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          onClick={() => console.log("ahahah")}
          ref={TextRef}
          onMouseEnter={() => {
            TextRef.current.getStage().container().style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            TextRef.current.getStage().container().style.cursor = "default";
          }}
        />

        <Arrow points={[-90, 0, 150, 0]} fill="black" stroke="black" />
        <Text
          x={18}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
        <Text
          x={-90}
          y={10}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
        />
      </Group>
    );
  };

  const InvertedStraightArrow: React.FC<{
    x: number;
    y: number;
    label: string;
    value: string;
    unit: string;
  }> = ({ x, y, label, value, unit }) => {
    return (
      <Group
        draggable
        x={559}
        y={318}
        id={"inverted_straight_arrow"}
        scaleX={-1}
      >
        <Text
          x={15}
          y={-21}
          text="Left Renal"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          scaleX={-1}
        />

        <Arrow points={[-75, 0, 150, 0]} fill="black" stroke="black" />
        <Text
          x={68}
          y={10}
          text="Length (cm)"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
          scaleX={-1}
        />
        <Text
          x={-34}
          y={10}
          text="Value"
          fontSize={16}
          fontFamily="Arial"
          fill="black"
          align="center"
          scaleX={-1}
        />
      </Group>
    );
  };

  return (
    <>
      <Stage
        // width={2000}
        // height={1000}
        width={800}
        height={842}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        ref={stageRef}
        onWheel={(e) => {
          // stop default scrolling
          e.evt.preventDefault();
          let direction = e.evt.deltaY > 0 ? 1 : -1;
          // when we zoom on trackpad, e.evt.ctrlKey is true
          // in that case lets revert direction
          if (e.evt.ctrlKey) {
            direction = -direction;
          }
          handleZoom(direction);
        }}
      >
        {/* <KonvaEditableText /> */}

        <Layer id={"layerToHide"} x={56} y={7}>
          <>
            <Toolbar
              toolbarArrowReference={toolbarArrowReference}
              toolbarTextRef={toolbarDraggableTextRef}
              toolbarShadeRef={toolbarShadeRef}
              toolbarCustomArrowRef={toolbarCustomShapeRef}
              handleArrowDragEnds={handleArrowDragEnds}
              handleTextDragEnd={handleTextDragEnd}
              handleShadeDragEnd={handleShadeDragEnd}
              handleCustomShapeDragEnd={handleCustomShapeDragEnd}
              toolbarX={toolbarX}
              toolbarY={toolbarY}
              toolbarHeight={toolbarHeight}
              toolbarWidth={toolbarWidth}
            />
          </>
        </Layer>
        {!!annotate && stageWidth > 1115 && (
          <Layer>
            <Html
              groupProps={{
                x: stageWidth / 10,
                y: stageHeight / 25,
              }}
              divProps={{ style: { opacity: 1 } }}
            >
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  borderColor: "black",
                  borderRadius: "8px",
                  boxShadow: "0 8px 4px rgba(0, 0, 0, 0.2)",
                  minWidth: "144px",
                }}
                onClick={() => {
                  setLoadTemplate(true);
                }}
              >
                {!loadTemplate ? "Load Templates" : "save"}
              </Button>
            </Html>
          </Layer>
        )}

        {/* <Layer>
          <Html divProps={{ id: "button" }}>
            <Box ref={headerRef}>
              <Button
                variant="outlined"
                sx={{
                  color: "black",
                  borderColor: "black",
                  borderRadius: "8px",
                  boxShadow: "0 8px 4px rgba(0, 0, 0, 0.2)",
                  minWidth: "144px",
                }}
                onClick={() => {
                  handleExportToPDF();
                }}
              >
                Export to PDF
              </Button>
            </Box>
          </Html>
        </Layer> */}

        {/* <Layer id="exportElement">
          <Html
            groupProps={{
              x: 0,
              y: 0,
            }}
            divProps={{ style: { opacity: 1 } }}
          >
            <Text
              x={440}
              y={15}
              text="Label_1"
              fontSize={16}
              fontFamily="Arial"
              fill="black"
              align="center"
            />
          </Html>
        </Layer> */}

        <Layer>
          <URLImage src="/Schematic01.svg" />
        </Layer>
        {/* TOOLS */}
        <Layer>
          {/* <UpwardBendArrowHead />
          <UpwardInvertBendArrowHead /> */}
          {/* <DownwardBendArrowHead />
          <DownwardInvertedBendArrowHead />
          <DoubleHeadArrow />
          <InvertedDoubleHeadArrow /> */}
          {/* <DivertedArrow /> */}
          {/* <DottedDivertedArrow /> --
          <StraightArrow />
          <InvertedStraightArrow /> */}
          {arrows.map((arrow, i) => (
            <ArrowShape
              key={arrow.id}
              shapeProps={arrow}
              isSelected={arrow.id === selectedArrowId}
              onSelect={() => {
                selectArrowShape(arrow.id);
              }}
              onChange={(newAttrs) => {
                const updatedArrows = arrows.slice();
                updatedArrows[i] = newAttrs;
                setArrows(updatedArrows);
              }}
              onDelete={deleteArrowShape}
            />
          ))}
          {texts.map((textProps, i) => (
            <>
              <TextShape
                key={textProps.id}
                shapeProps={textProps}
                isSelected={textProps.id === selectedTextId}
                onSelect={() => {
                  selectTextShape(textProps.id);
                }}
                onChange={(newAttrs) => {
                  const updatedShape = texts.slice();
                  updatedShape[i] = newAttrs;
                  setTexts(updatedShape);
                }}
                onTextChange={(value: string) => {
                  handleTextChange(textProps.id, value);
                }}
                onTextClick={() => {
                  selectTextShape(textProps.id);
                }}
                customText={textProps.customText}
                isFromTemplate={textProps.isFromTemplate}
              />
            </>
          ))}
          {shades.map((shadeProps: any, i: number) => (
            <>
              <ShadingShape
                key={shadeProps.id}
                shapeProps={shadeProps}
                isSelected={shadeProps.id === selectedShadeId}
                onSelect={() => {
                  setSelectShadeId(shadeProps.id);
                }}
                onChange={(newAttrs) => {
                  const updatedShape = shades.slice();
                  updatedShape[i] = newAttrs;
                  setShades(updatedShape);
                }}
              />
            </>
          ))}
          {customShapes.map((customShapeProps: any, i: number) => (
            <>
              <CustomArrowShape
                key={customShapeProps.id}
                shapeProps={customShapeProps}
                isSelected={customShapeProps.id === selectedCustomShapeId}
                onSelect={() => {
                  setSelectedCustomShapeId(customShapeProps.id);
                }}
                onChange={(newAttrs) => {
                  const updatedShape = customShapes.slice();
                  updatedShape[i] = newAttrs;
                  setCustomShapes(updatedShape);
                }}
              />
            </>
          ))}
        </Layer>
      </Stage>
    </>
  );
};

export default KonvaGround;
