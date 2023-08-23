import React from 'react';
import { Stage, Layer, Shape } from 'react-konva';

const XShape = ({ x, y, size, strokeWidth } : any) => {
    const halfSize = size / 2;
  
    return (
      <Shape
      x={x - halfSize}
      y={y - halfSize}
      draggable
      
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(x - halfSize, y - halfSize);
          context.lineTo(x + halfSize, y + halfSize);
          context.moveTo(x + halfSize, y - halfSize);
          context.lineTo(x - halfSize, y + halfSize);
          context.closePath();
          context.lineWidth = strokeWidth;
          context.strokeStyle = 'black';
          context.stroke();
        }}
      />
    );
  };

export default XShape;