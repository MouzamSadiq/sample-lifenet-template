export type URLImageProps = {
  src: string;
};

export type DraggedArrowProps = {
  x: any;
  y: any;
  width: number;
  height: number;
  fill: string;
  draggable: boolean;
};

export interface ArrowShapeProps {
  x: number;
  y: number;
  fill: string;
  draggable: boolean;
  id: string;
  points: number[];
}

export interface TextShapeProps {
  x: number;
  y: number;
  fontSize: number;
  // text: string;
  fill: string;
  // width: number;
  // height: number;
  // rotation: number;
  // textWidth: number;
  // textHeight: number;
  id: string;
  customText: string;
  draggable: boolean;
  isFromTemplate: boolean;
  scaleX?: number | undefined;
  isEditing: boolean;
}

export interface ShadingToolProps {
  x: number;
  y: number;
  fill: string;
  draggable?: boolean;
  id: string;
  width: number;
  height: number;
  stroke: string;
  opacity: number;
  strokeWidth: number;
  shadowBlur: number;
}
export interface CustomArrowProps {
  x: number;
  y: number;
  fill: string;
  draggable: boolean;
  id: string;
  points: number[];
}
