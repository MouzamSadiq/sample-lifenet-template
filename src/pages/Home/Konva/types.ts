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
