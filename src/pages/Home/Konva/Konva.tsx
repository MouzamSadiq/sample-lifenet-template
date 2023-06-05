import React, { useRef, useEffect, useState } from "react";
import {
  Stage,
  Layer,
  Arrow,
  Transformer,
  Image,
  Rect,
  Text,
} from "react-konva";
import { Html } from "react-konva-utils";

interface ShapeProps {
  x: number;
  y: number;
  fill: string;
  draggable: boolean;
  id: string;
  points: number[];
}
interface CustomShapeProps {
  x: number;
  y: number;
  fill: string;
  draggable: boolean;
  id: string;
  points: number[];
}

interface TextProps {
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  name: string;
  // text: string;
  fill: string;
  width: number;
  height: number;
  rotation: number;
  textWidth: number;
  textHeight: number;
  id: string;
  customText: string;
}

interface ShadeToolProps {
  x: number;
  y: number;
  fill: string;
  draggable?: boolean;
  id: string;
  width: number;
  height: number;
}

const ArrowShape: React.FC<{
  shapeProps: ShapeProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ShapeProps) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      // Attach transformer manually when selected
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const cursorStyle = isSelected ? "move" : "pointer";

  return (
    <>
      <Arrow
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        stroke="black"
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            points: node.points().map((point: number, i: number) => {
              // Adjust the points based on the scale
              if (i % 2 === 0) {
                return point * scaleX;
              } else {
                return point * scaleY;
              }
            }),
          });
        }}
        onMouseEnter={() => {
          shapeRef.current.getStage().container().style.cursor = cursorStyle;
        }}
        onMouseLeave={() => {
          shapeRef.current.getStage().container().style.cursor = "default";
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            // Limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const TextShape: React.FC<{
  shapeProps: TextProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: any) => void;
  onTextChange: (value: string) => void;
  onTextClick: () => void;
  customText: string;
}> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  onTextChange,
  onTextClick,
  customText,
}) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isSelected) {
      // Attach transformer manually when selected
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const cursorStyle = isSelected ? "move" : "pointer";

  function toggleEdit() {
    setIsEditing(!isEditing);
    onTextClick();
    console.log("Toogle Edit >>>>>>");
  }

  function handleTextChange(e: any) {
    onTextChange(e.currentTarget.value);
  }
  function handleEscapeKeys(e: any) {
    if ((e.keyCode === 13 && !e.shiftKey) || e.keyCode === 27) {
      toggleEdit();
    }
  }

  function getStyle(width: number, height: number) {
    const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    const baseStyle = {
      width: `${width}px`,
      height: `${height}px`,
      border: "none",
      padding: "0px",
      margin: "0px",
      background: "none",
      outline: "none",
      // resize: "none",
      colour: "black",
      fontSize: "20px",
      fontFamily: "sans-serif",
    };
    if (isFirefox) {
      return baseStyle;
    }
    return {
      ...baseStyle,
      margintop: "-4px",
    };
  }
  const style = getStyle(520, 140);

  return (
    <>
      {!isEditing ? (
        <Text
          text={customText}
          onDblClick={toggleEdit}
          onDblTap={toggleEdit}
          // stroke="black"
          onChange={onTextChange}
          onClick={onSelect}
          ref={shapeRef}
          draggable
          {...shapeProps}
          onDragEnd={(e) => {
            onChange({
              ...shapeProps,
              x: e.target.x(),
              y: e.target.y(),
            });
          }}
          onTransform={(e) => {
            const textNode = shapeRef.current;
            const newWidth = textNode.width() * textNode.scaleX();
            const newHeight = textNode.height() * textNode.scaleY();
            const node = shapeRef.current;
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            node.scaleX(1);
            node.scaleY(1);
            onChange({
              ...shapeProps,
              width: newWidth,
              scaleX: 1,
            });
          }}
          onMouseEnter={() => {
            shapeRef.current.getStage().container().style.cursor = cursorStyle;
          }}
          onMouseLeave={() => {
            shapeRef.current.getStage().container().style.cursor = "default";
          }}
        />
      ) : (
        <Html
          groupProps={{
            x: shapeProps.x,
            y: shapeProps.y,
          }}
          divProps={{ style: { opacity: 1 } }}
        >
          <textarea
            value={customText}
            onChange={handleTextChange}
            onKeyDown={handleEscapeKeys}
            style={style}
          />
        </Html>
      )}
      {isSelected && (
        <Transformer
          ref={trRef}
          rotateEnabled={false}
          flipEnabled={false}
          enabledAnchors={["middle-left", "middle-right"]}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            // Limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const ShadingShape: React.FC<{
  shapeProps: ShadeToolProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ShadeToolProps) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      // Attach transformer manually when selected
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const cursorStyle = isSelected ? "move" : "pointer";

  return (
    <>
      <Rect
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        // stroke="black"
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            width: node.width() * scaleX,
            height: node.height() * scaleY,
          });
        }}
        onMouseEnter={() => {
          shapeRef.current.getStage().container().style.cursor = cursorStyle;
        }}
        onMouseLeave={() => {
          shapeRef.current.getStage().container().style.cursor = "default";
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            // Limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

const CustomShape: React.FC<{
  shapeProps: CustomShapeProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: CustomShapeProps) => void;
}> = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  useEffect(() => {
    if (isSelected) {
      // Attach transformer manually when selected
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  const cursorStyle = isSelected ? "move" : "pointer";

  return (
    <>
      <Arrow
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        stroke="black"
        onTransformEnd={(e) => {
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          node.scaleX(1);
          node.scaleY(1);
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            points: node.points().map((point: number, i: number) => {
              // Adjust the points based on the scale
              if (i % 2 === 0) {
                return point * scaleX;
              } else {
                return point * scaleY;
              }
            }),
          });
        }}
        onMouseEnter={() => {
          shapeRef.current.getStage().container().style.cursor = cursorStyle;
        }}
        onMouseLeave={() => {
          shapeRef.current.getStage().container().style.cursor = "default";
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox: any, newBox: any) => {
            // Limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  );
};

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
  const [stageWidth, setStageWidth] = useState(window.innerWidth);
  const [stageHeight, setStageHeight] = useState(window.innerHeight);
  const [arrows, setArrows] = useState<ShapeProps[]>([]);
  const [selectedId, selectShape] = useState<string | null>(null);

  const [texts, setTexts] = useState<TextProps[]>([]);
  console.log({ texts });
  const [selectedTextId, selectTextShape] = useState<string | null>(null);

  const [shades, setShades] = useState<any>([]);
  const [selectedShadeId, setSelectShapeId] = useState<string | null>(null);

  const [customShapes, setCustomShapes] = useState<any>([]);
  const [selectedCustomShapeId, setSelectedCustomShapeId] = useState<
    string | null
  >(null);
  const toolbarArrowReference = useRef<any>(null);
  const toolbarDraggableTextRef = useRef<any>(null);
  const toolbarShadeRef = useRef<any>(null);
  const toolbarCustomShapeRef = useRef<any>(null);

  const checkDeselect = (e: any) => {
    // Deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      selectTextShape(null);
      setSelectShapeId(null);
      setSelectedCustomShapeId(null);
    }
  };

  // ------------ Image Rendering Function---------------
  const URLImage: React.FC<{ src: string }> = ({ src }) => {
    // Calculate the position to center the image
    const width = (stageWidth - 355) / 2;
    const height = stageHeight / 4.5;
    const [image, setImage] = useState<HTMLImageElement>();

    useEffect(() => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImage(img);
      };
    }, [src]);

    return (
      <>
        <Image
          onClick={() => {
            selectShape(null);
          }}
          image={image}
          x={width}
          y={height}
          width={355}
          height={455}
        />
      </>
    );
  };
  const rectWidth = 555;
  const rectHeight = 77.5;
  const rectX = (stageWidth - rectWidth) / 2;
  const rectY = 5;

  const ToolBar: React.FC = () => {
    const handleMouseEnter = () => {
      document.body.style.cursor = "pointer";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "default";
    };
    console.log(
      "ReactX",
      rectX + rectWidth - 30,
      rectY + rectHeight - 20,
      rectX + rectWidth + 30,
      rectY + rectHeight - 20,
      rectX + rectWidth + 50,
      rectY + rectHeight / 2
    );

    return (
      <>
        <Rect
          x={rectX}
          y={rectY}
          width={700}
          height={rectHeight}
          fill="white"
          shadowBlur={5}
          shadowColor="black"
          cornerRadius={8}
        />
        <Text
          text="Shape Arrow"
          fontSize={15}
          x={rectX + rectWidth / 6}
          y={15}
        />

        <Arrow
          id="toolbarArrow"
          points={[
            rectX + rectWidth / 6,
            rectY + rectHeight / 1.5,
            rectX + rectWidth / 3,
            rectY + rectHeight / 1.5,
          ]}
          fill="black"
          stroke="black"
          ref={toolbarArrowReference}
          draggable={true}
          // onDragStart={handleArrowDragEnds}
          onDragEnd={handleArrowDragEnds}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Text
          text="Text editor"
          fontSize={15}
          x={rectX + rectWidth / 2.2}
          y={15}
        />
        <Text
          fontSize={40}
          text="T"
          fontFamily="Belgrano"
          x={rectX + rectWidth / 2}
          y={rectY + rectHeight / 2.5}
          draggable
          ref={toolbarDraggableTextRef}
          onDragEnd={handleTextDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Text text="Shade" fontSize={15} x={rectX + rectWidth / 1.4} y={15} />
        <Rect
          x={rectX + rectWidth / 1.4}
          y={rectY + rectHeight / 2.5}
          width={40}
          height={30}
          fill="transparent"
          stroke="black"
          opacity={0.5}
          strokeWidth={1}
          shadowBlur={5}
          draggable
          ref={toolbarShadeRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onDragEnd={handleShadeDragEnd}
        />
        <Text
          text="Custom shape"
          fontSize={15}
          x={rectX + rectWidth / 1.1}
          y={15}
        />
        <Arrow
          id="customArrowShape"
          points={[
            rectX + rectWidth - 30,
            rectY + rectHeight - 20,
            rectX + rectWidth + 30,
            rectY + rectHeight - 20,
            rectX + rectWidth + 50,
            rectY + rectHeight / 2,
          ]}
          fill="black"
          stroke="black"
          draggable
          ref={toolbarCustomShapeRef}
          onDragEnd={handleCustomShapeDragEnd}
          // draggable={true}
          // onDragEnd={handleDragEnds}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </>
    );
  };

  // --------- Toolbar Arrow Drag function-----
  const handleArrowDragEnds = () => {
    const draggableArrow = toolbarArrowReference.current;
    console.log(
      draggableArrow.getStage().getPointerPosition().x,
      draggableArrow.getStage().getPointerPosition().y
    );
    const newArrow: ShapeProps = {
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
    selectShape(newArrow.id);
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
      customText: "Double click",
    };

    // Reset draggableText position
    draggableText.setAttrs({
      x: 340,
      y: 350,
    });
    setTexts([...texts, newText]);
  };

  // --------- Toolbar Text Dragfunction-----
  const handleShadeDragEnd = () => {
    const draggableShade = toolbarShadeRef.current;

    const newShade: any = {
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

    // Reset draggableText position
    draggableShade.setAttrs({
      x: 0,
      y: 0,
    });

    setShades([...shades, newShade]);
    // selectShape(newArrow.id);
  };

  const handleCustomShapeDragEnd = () => {
    const draggableCustomShape = toolbarCustomShapeRef.current;
    const newCustomShape: any = {
      x: draggableCustomShape.getStage().getPointerPosition().x,
      y: draggableCustomShape.getStage().getPointerPosition().y,
      fill: "black",
      draggable: true,
      id: Math.random().toString(16).slice(2),
      points: [-60, 0, 0, 0, 20, -22],
    };

    // Reset draggableText position
    draggableCustomShape.setAttrs({
      x: 0,
      y: 0,
    });

    setCustomShapes([...customShapes, newCustomShape]);
    // selectShape(newArrow.id);
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
        <ToolBar />
      </Layer>
      <Layer>
        {arrows.map((arrow, i) => (
          <ArrowShape
            key={arrow.id}
            shapeProps={arrow}
            isSelected={arrow.id === selectedId}
            onSelect={() => {
              selectShape(arrow.id);
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
            />
          </>
        ))}
        {shades.map((textProps: any, i: number) => (
          <>
            <ShadingShape
              key={textProps.id}
              shapeProps={textProps}
              isSelected={textProps.id === selectedShadeId}
              onSelect={() => {
                setSelectShapeId(textProps.id);
              }}
              onChange={(newAttrs) => {
                const updatedShape = shades.slice();
                updatedShape[i] = newAttrs;
                setShades(updatedShape);
              }}
            />
            {/* <Rect
              x={20}
              y={20}
              width={30}
              height={40}
              fill="black"
              shadowColor="black"
              shadowOffsetY={10}
              shadowOffsetX={0}
              shadowBlur={30}
              shadowOpacity={0.6}
              draggable
              // perfectDrawEnabled={true}
            /> */}
          </>
        ))}
        {customShapes.map((customShapeProps: any, i: number) => (
          <>
            <CustomShape
              key={customShapeProps.id}
              shapeProps={customShapeProps}
              isSelected={customShapeProps.id === selectedCustomShapeId}
              onSelect={() => {
                setSelectedCustomShapeId(customShapeProps.id);
              }}
              onChange={(newAttrs) => {
                const updatedShape = shades.slice();
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
