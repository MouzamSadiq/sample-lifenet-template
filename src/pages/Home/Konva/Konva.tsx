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
  fontSize: string;
  fontFamily: string;
  ref: string;
  name: string;
  text: string;
  fill: string;
  width: number;
  height: number;
  rotation: number;
  textWidth: number;
  textHeight: number;
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
  const [texts, setTexts] = useState<TextProps[]>([]);

  const [selectedId, selectShape] = useState<string | null>(null);
  const toolbarArrowReference = useRef<any>(null);
  const toolbarDraggableTextRef = useRef<any>(null);

  const checkDeselect = (e: any) => {
    // Deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
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

    return (
      <>
        <Text
          fontSize={30}
          text="Toolbar"
          fontFamily="Belgrano"
          x={rectWidth / 2}
          y={rectHeight / 2}
        />
        <Rect
          x={rectX}
          y={rectY}
          width={555}
          height={rectHeight}
          fill="white"
          shadowBlur={5}
          shadowColor="black"
        />

        <Arrow
          id="toolbarArrow"
          points={[
            rectX + rectWidth / 6,
            rectY + rectHeight / 2,
            rectX + rectWidth / 3,
            rectY + rectHeight / 2,
          ]}
          fill="black"
          stroke="black"
          ref={toolbarArrowReference}
          draggable={true}
          onDragEnd={handleDragEnds}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
        <Text
          fontSize={40}
          text="T"
          fontFamily="Belgrano"
          x={955}
          y={5 + 77.5 / 4}
          draggable
          ref={toolbarDraggableTextRef}
          onDragEnd={handleTextDragEnd}
        />
      </>
    );
  };

  // --------- Toolbar Arrow Drag function-----
  const handleDragEnds = () => {
    const draggableArrow = toolbarArrowReference.current;

    const newArrow: ShapeProps = {
      x: draggableArrow.getStage().getPointerPosition().x,
      y: draggableArrow.getStage().getPointerPosition().y,
      fill: "black",
      draggable: true,
      id: Math.random().toString(16).slice(2),
      points: [0, 0, 0, 0],
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
    const draggableText = draggableTextRef.current;

    // const newArrow: ShapeProps = {
    //   x: draggableArrow.getStage().getPointerPosition().x,
    //   y: draggableArrow.getStage().getPointerPosition().y,
    //   fill: "black",
    //   draggable: true,
    //   id: Math.random().toString(16).slice(2),
    //   points: [0, 0, 0, 0],
    // };

    // Reset draggableText position
    draggableText.setAttrs({
      x: 955,
      y: (5 + 77.5) / 4,
    });

    // setArrows([...arrows, newArrow]);
    // selectShape(newArrow.id);
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseDown={checkDeselect}
      onTouchStart={checkDeselect}
    >
      <Layer>
        <URLImage src="https://lifenethealth.visualstudio.com/8f99a695-9545-4cb5-a249-dbfe0d365a3f/_apis/git/repositories/92dd74a8-03df-4361-aaa0-32fe4091992f/items?path=/ProcessingLogs/ProcessingLogs_iOS/ProcessingLogs_Aortoilliac/Resources/AortoIliacArteryDiagram.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0" />
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
      </Layer>
    </Stage>
  );
};

export default KonvaGround;
