import { Text, Transformer } from "react-konva";
import { Html } from "react-konva-utils";
import { TextShapeProps } from "../../types";
import React, { useRef, useEffect, useState } from "react";

export const TextShape: React.FC<{
  shapeProps: TextShapeProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: TextShapeProps) => void;
  onTextChange: (value: string) => void;
  onTextClick: () => void;
  customText: string;
  isFromTemplate: boolean;
}> = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  onTextChange,
  onTextClick,
  customText,
  isFromTemplate,
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
  const style = getStyle(520, 45);

  return (
    <>
      {!isEditing ? (
        <Text
          text={customText}
          onDblClick={!isFromTemplate ? toggleEdit : undefined}
          onDblTap={toggleEdit}
          // stroke="black"
          onChange={onTextChange}
          onClick={!isFromTemplate ? onSelect : undefined}
          ref={shapeRef}
          // draggable
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
            // const newHeight = textNode.height() * textNode.scaleY();
            const node = shapeRef.current;
            // const scaleX = node.scaleX();
            // const scaleY = node.scaleY();
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
      {isSelected && !isEditing && (
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
