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

interface ShapeProps {
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
  text: string;
  fill: string;
  width: number;
  height: number;
  rotation: number;
  textWidth: number;
  textHeight: number;
  id: string;
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
      <Text
        // stroke="black"
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
            fontSize: shapeProps.fontSize * Math.max(scaleX, scaleY), // Adjust the font size based on the scale
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
  const [selectedTextId, selectTextShape] = useState<string | null>(null);

  const toolbarArrowReference = useRef<any>(null);
  const toolbarDraggableTextRef = useRef<any>(null);

  const checkDeselect = (e: any) => {
    // Deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
      selectTextShape(null);
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

  const ToolBar: React.FC = () => {
    const rectWidth = 555;
    const rectHeight = 77.5;
    const rectX = (stageWidth - rectWidth) / 2;
    const rectY = 5;

    const handleMouseEnter = () => {
      document.body.style.cursor = "pointer";
    };

    const handleMouseLeave = () => {
      document.body.style.cursor = "default";
    };
    console.log("ReactX", rectX, "ReactY", rectY);

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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // draggable
        />
        <Text
          text="Custom shape"
          fontSize={15}
          x={rectX + rectWidth / 1.1}
          y={15}
        />
        <Arrow
          id="toolbarArrow"
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
          ref={toolbarArrowReference}
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
      text: "15 cm",
      // width: 150,
      // height: 250,
    };

    // Reset draggableText position
    draggableText.setAttrs({
      x: 340,
      y: 350,
    });

    setTexts([...texts, newText]);
    // selectShape(newArrow.id);
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
            key={i}
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
              key={i}
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
            />
            {/* <Text
              key={i}
              x={textProps.x}
              y={textProps.y}
              id={textProps.id}
              // width={100}
              // height={250}
              text={textProps.text}
              // shapeProps={arrow}
              // isSelected={arrow.id === selectedId}
              // onSelect={() => {
              //   selectShape(arrow.id);
              // }}
              // onChange={(newAttrs) => {
              //   const updatedArrows = arrows.slice();
              //   updatedArrows[i] = newAttrs;
              //   setArrows(updatedArrows);
              // }}
            /> */}
          </>
        ))}
      </Layer>
    </Stage>
  );
};

export default KonvaGround;
