import { useRef, useState, useEffect } from "react";
import { Stage, Layer, Rect, Text, Image, Arrow } from "react-konva";
import { URLImageProps } from "./types";

const KonvaGround = () => {
  const stageReference = useRef(null);
  const toolbarArrowReference = useRef(null);
  const [rects, setRects] = useState([{}]);

  // ------------ Image Rendering Function---------------
  const URLImage = ({ src }: URLImageProps) => {
    // Calculate the position to center the image
    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;
    const width = stageWidth / 2.5;
    const height = stageHeight / 8;
    const [image, setImage] = useState<HTMLImageElement | undefined>();
    useEffect(() => {
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImage(img);
      };
    }, [src]);

    return (
      <div>
        <Image image={image} x={width} y={height} width={355} height={455} />
      </div>
    );
  };

  // --------- Toolbar Arrow Drag function-----
  const handleDragEnds = () => {
    const draggableArrow = toolbarArrowReference.current;
    // const stage = stageReference.current;
    const newArrow = {
      x: (draggableArrow as any).getStage().getPointerPosition().x,
      y: (draggableArrow as any).getStage().getPointerPosition().y,
      width: 50,
      height: 50,
      fill: "black",
      draggable: true,
    };
    setRects([...rects, newArrow]);
    // (stage as any).draw();
  };

  const ToolBar = () => {
    return (
      <>
        <Text
          fontSize={30}
          text="Toolbar"
          fontFamily="Belgrano"
          x={15}
          y={55}
        />
        <Rect
          y={15}
          x={510}
          width={555}
          height={77.5}
          fill="white"
          shadowBlur={5}
          shadowColor="black"
        />

        <Arrow
          id="toolbarArrow"
          points={[25, 255, 80, 255]}
          fill="black"
          stroke="black"
          ref={toolbarArrowReference}
          draggable={true}
          onDragEnd={handleDragEnds}
        />
      </>
    );
  };
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageReference}
    >
      <Layer>
        <URLImage src="https://lifenethealth.visualstudio.com/8f99a695-9545-4cb5-a249-dbfe0d365a3f/_apis/git/repositories/92dd74a8-03df-4361-aaa0-32fe4091992f/items?path=/ProcessingLogs/ProcessingLogs_iOS/ProcessingLogs_Aortoilliac/Resources/AortoIliacArteryDiagram.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0" />
      </Layer>
      <Layer>
        {rects.map((eachRect: any) => (
          <Arrow
            id="draggedArrowId"
            points={[eachRect.x - 100, eachRect.y, eachRect.x, eachRect.y]}
            fill="black"
            stroke="black"
            draggable={eachRect.draggable}
            key={eachRect.x + eachRect.y}
          />
        ))}
      </Layer>
      <Layer>
        <ToolBar />
      </Layer>
    </Stage>
  );
};

export default KonvaGround;
