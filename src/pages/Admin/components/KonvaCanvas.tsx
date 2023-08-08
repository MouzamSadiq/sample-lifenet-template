import React from "react";
import { Layer, Stage } from "react-konva";
import TemplateImageholder from "./TemplateImageholder";

const KonvaCanvas = () => {
  return (
    <Stage width={500} height={600}>
      <Layer>
        <TemplateImageholder src="/Schematic01.svg" />
      </Layer>
    </Stage>
  );
};

export default KonvaCanvas;
