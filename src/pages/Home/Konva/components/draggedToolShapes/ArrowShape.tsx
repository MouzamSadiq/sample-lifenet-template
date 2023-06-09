import React, { useRef, useEffect } from "react";
import { Arrow, Transformer } from "react-konva";
import { ArrowShapeProps } from "../../types";
import { Html } from "react-konva-utils";
import { Button } from "@mui/material";

export const ArrowShape: React.FC<{
  shapeProps: ArrowShapeProps;
  isSelected: boolean;
  onSelect: () => void;
  onChange: (newAttrs: ArrowShapeProps) => void;
  onDelete: () => void; // New prop for deleting the arrow
}> = ({ shapeProps, isSelected, onSelect, onChange, onDelete }) => {
  const shapeRef = useRef<any>();
  const trRef = useRef<any>();

  console.log("ShapeRefArorow", shapeRef.current);

  useEffect(() => {
    if (isSelected) {
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
        <>
          <Transformer
            ref={trRef}
            boundBoxFunc={(oldBox: any, newBox: any) => {
              if (newBox.width < 5 || newBox.height < 5) {
                return oldBox;
              }
              return newBox;
            }}
          />
          <Html
            groupProps={{
              x: (window.innerWidth - 555) / 3,
              y: 35,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                color: "black",
                backgroundColor: "#BCBDBE",
                // opacity: 1,
                borderColor: "black",
                borderRadius: "8px",
                boxShadow: "0 8px 4px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  backgroundColor: "#BCBDBE",
                  opacity: 0.9,
                },
              }}
              onClick={onDelete}
              // style={{ position: "absolute", top: "-10px", right: "-10px" }}
            >
              Delete
            </Button>
          </Html>
        </>
      )}
    </>
  );
};
