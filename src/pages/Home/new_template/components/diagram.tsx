import { Layer, Image } from "react-konva";

function Diagram({image}: any) {
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = image;
  return (
    <Layer>
      <Image image={img} x={95} y={280} width={405} height={505} />
    </Layer>
  );
}

export default Diagram;
