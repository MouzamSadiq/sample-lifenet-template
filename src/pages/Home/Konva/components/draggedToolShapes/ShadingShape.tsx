import { Rect, Transformer } from "react-konva";
import { ShadingToolProps } from "../../types";
import React, { useRef, useEffect } from "react";

export const ShadingShape: React.FC<{
  shapeProps: ShadingToolProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ShadingToolProps) => void;
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
