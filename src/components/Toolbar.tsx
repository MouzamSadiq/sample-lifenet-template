import React, { RefObject } from "react";
import { Arrow, Rect, Stage, Text } from "react-konva";

interface ToolBarProps {
  toolbarArrowReference: any;
  toolbarTextRef: any;
  toolbarCustomArrowRef: any;
  toolbarShadeRef: any;
  handleArrowDragEnds: () => void;
  handleTextDragEnd: () => void;
  handleShadeDragEnd: () => void;
  handleCustomShapeDragEnd: () => void;
  toolbarX: number;
  toolbarY: number;
  toolbarHeight: number;
  toolbarWidth: number;
}

const Toolbar: React.FC<ToolBarProps> = (props) => {
  const {
    toolbarArrowReference,
    toolbarTextRef,
    toolbarCustomArrowRef,
    toolbarShadeRef,
    handleArrowDragEnds,
    handleTextDragEnd,
    handleShadeDragEnd,
    handleCustomShapeDragEnd,
    toolbarX,
    toolbarY,
    toolbarHeight,
    toolbarWidth,
  } = props;

  const handleMouseEnter = () => {
    document.body.style.cursor = "pointer";
  };

  const handleMouseLeave = () => {
    document.body.style.cursor = "default";
  };

  return (
    <>
      <Rect
        x={25}
        y={0}
        width={500}
        height={toolbarHeight}
        fill="white"
        shadowBlur={5}
        shadowColor="black"
        cornerRadius={8}
      />
      <Text
        text="Shape Arrow"
        fontSize={15}
        x={toolbarX + toolbarWidth / 6}
        y={15}
      />

      <Arrow
        id="toolbarArrow"
        points={[
          toolbarX + toolbarWidth / 6,
          toolbarY + toolbarHeight / 1.5,
          toolbarX + toolbarWidth / 3,
          toolbarY + toolbarHeight / 1.5,
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
        x={toolbarX + toolbarWidth / 2.2}
        y={15}
      />
      <Text
        fontSize={40}
        text="T"
        fontFamily="Belgrano"
        x={toolbarX + toolbarWidth / 2}
        y={toolbarY + toolbarHeight / 2.5}
        draggable
        ref={toolbarTextRef}
        onDragEnd={handleTextDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <Text
        text="Shade"
        fontSize={15}
        x={toolbarX + toolbarWidth / 1.4}
        y={15}
      />
      <Rect
        x={toolbarX + toolbarWidth / 1.4}
        y={toolbarY + toolbarHeight / 2.5}
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
        x={toolbarX + toolbarWidth / 1.1}
        y={15}
      />
      <Arrow
        id="customArrowShape"
        points={[
          toolbarX + toolbarWidth - 30,
          toolbarY + toolbarHeight - 20,
          toolbarX + toolbarWidth + 30,
          toolbarY + toolbarHeight - 20,
          toolbarX + toolbarWidth + 50,
          toolbarY + toolbarHeight / 2,
        ]}
        fill="black"
        stroke="black"
        draggable
        ref={toolbarCustomArrowRef}
        onDragEnd={handleCustomShapeDragEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    </>
  );
};

export default Toolbar;
