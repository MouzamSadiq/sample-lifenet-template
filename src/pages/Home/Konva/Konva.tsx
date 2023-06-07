import { Button } from "@mui/material";
import React, { useRef, useEffect, useState } from "react";
import { Stage, Layer } from "react-konva";
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

const KonvaGround: React.FC = () => {
  useEffect(() => {
    const handleResize = () => {
      setStageWidth(window.innerWidth);
      setStageHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const params = new URLSearchParams(window.location.search);
  const annotate = params.get("annotate");
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);
  console.log("Screeennn inners????????", stageWidth, stageHeight);

  // UseStates for Shapes on CV image
  const [loadTemplate, setLoadTemplate] = useState<boolean>(false);
  const [arrows, setArrows] = useState<ArrowShapeProps[]>([]);
  const [texts, setTexts] = useState<TextShapeProps[]>([]);
  const [shades, setShades] = useState<ShadingToolProps[]>([]);
  const [customShapes, setCustomShapes] = useState<CustomArrowProps[]>([]);
  console.log({ arrows });
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

  useEffect(() => {
    if (loadTemplate) {
      setArrows([initialArrowShapes]);
      setTexts(initialTextTemplate);
      setCustomShapes([initialCustomArrowTemplate]);
    } else {
      setArrows([]);
      setTexts([]);
      setCustomShapes([]);
    }
  }, [loadTemplate]);

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
      fontSize: 20,
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

  // This is too keep points responisive

  const adjustCoordinates = (x: number, y: number) => {
    const initialScreenWidth = 1920;
    const initialScreenHeight = 929;

    const currentScreenWidth = window.innerWidth;
    const currentScreenHeight = window.innerHeight;

    const newScreenX = initialScreenWidth / currentScreenWidth;
    const newScreenY = initialScreenHeight / currentScreenHeight;

    const adjustedX = x / newScreenX;
    const adjustedY = y / newScreenY;

    // setArrows([array1]);

    console.log("Calculated x and y:", adjustedX, adjustedY);
    return { x: adjustedX, y: adjustedY };
  };

  adjustCoordinates(1003.0023112302707, 357.0000000000004);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      {/* <KonvaEditableText /> */}
      <Layer>
        <URLImage src="https://lifenethealth.visualstudio.com/8f99a695-9545-4cb5-a249-dbfe0d365a3f/_apis/git/repositories/92dd74a8-03df-4361-aaa0-32fe4091992f/items?path=/ProcessingLogs/ProcessingLogs_iOS/ProcessingLogs_Aortoilliac/Resources/AortoIliacArteryImage.gif&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0" />
      </Layer>
      <Layer>
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
      </Layer>
      {!!annotate && (
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
      <Layer>
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
  );
};

export default KonvaGround;
