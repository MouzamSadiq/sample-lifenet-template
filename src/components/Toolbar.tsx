import React from "react";
import { Arrow, Rect, Text } from "react-konva";

interface ToolBarProps {
  stageWidth: number;
  toolbarArrowReference: any;
  toolbarDraggableTextRef: any;
  customArrowReference?: any;
  shadingToolRef?: any;
  handleArrowDragEnds: () => void;
  handleTextDragEnd: () => void;
}

const Toolbar: React.FC<ToolBarProps> = (props) => {
  const {
    stageWidth,
    toolbarArrowReference,
    toolbarDraggableTextRef,
    handleArrowDragEnds,
    handleTextDragEnd,
  } = props;
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
      <Text
        fontSize={30}
        text="Toolbar"
        fontFamily="Belgrano"
        x={rectWidth}
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
      <Text text="Shape Arrow" fontSize={15} x={rectX + rectWidth / 6} y={10} />

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
        // onDragStart={handleArrowDragEnds}
        onDragEnd={handleArrowDragEnds}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Text text="Text editor" fontSize={15} x={935} y={10} />
      <Text
        fontSize={40}
        text="T"
        fontFamily="Belgrano"
        x={rectX + rectWidth / 2}
        y={rectY + rectHeight / 3}
        draggable
        ref={toolbarDraggableTextRef}
        onDragEnd={handleTextDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Text text="Shade" fontSize={15} x={1025} y={10} />
      <Rect
        x={rectX + rectWidth - 175}
        y={rectY + rectHeight / 3}
        width={40}
        height={40}
        fill="transparent"
        stroke="black"
        strokeWidth={1}
        shadowBlur={5}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // draggable
      />
      <Text text="Custom shape" fontSize={15} x={1125} y={10} />
      <Arrow
        id="toolbarArrow"
        points={[
          rectX + rectWidth - 105,
          rectY + rectHeight - 30,
          rectX + rectWidth - 40,
          rectY + rectHeight - 30,
          rectX + rectWidth - 20,
          rectY + rectHeight / 3,
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

export default Toolbar;
