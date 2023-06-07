import { Arrow, Transformer } from "react-konva";
import React, { useRef, useEffect } from "react";
import { ArrowShapeProps } from "../../types";

export const ArrowShape: React.FC<{
  shapeProps: ArrowShapeProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ArrowShapeProps) => void;
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
        // draggable
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
