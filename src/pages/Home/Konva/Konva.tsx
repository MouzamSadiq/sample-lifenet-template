import { Box } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import { Stage, Layer, Rect, Text, Image, Arrow } from "react-konva";

const Konva = () => {
  const stageReference = useRef();
  const draggableRectReference = useRef();
  const [rects, setRects] = useState([]);

  const handleClick = () => {
    // setColor(Konva.Util.getRandomColor());
  };
  // Image Rendering Function
  const URLImage = ({ src, x, y }) => {
    const stageWidth = window.innerWidth;
    const stageHeight = window.innerHeight;

    // Calculate the position to center the image
    const width = stageWidth / 2.5;
    const height = stageHeight / 8;

    const [image, setImage] = useState();

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

  const handleDragEnds = () => {
    const draggableRect = draggableRectReference.current;
    console.log(draggableRect.getStage().getPointerPosition().x);
    console.log(draggableRect.getStage().getPointerPosition().y);
    const newRect = {
      x: draggableRect.getStage().getPointerPosition().x,
      y: draggableRect.getStage().getPointerPosition().y,
      width: 50,
      height: 50,
      fill: "red",
      draggable: true,
    };
    setRects([...rects, newRect]);
    const stage = stageReference.current;
    const draggableCircle = stage.findOne(".toolbarArrow");
    draggableCircle.position({ x: 50, y: 50 });
    // draggableRect.position({ x: 50, y: 50 });
    stageReference.current.draw();
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
          y={110}
          x={15}
          width={77.5}
          height={355}
          fill="white"
          shadowBlur={5}
          shadowColor="black"
        />

        <Arrow
          name="toolbarArrow"
          points={[25, 255, 80, 255]}
          fill="black"
          stroke="black"
          ref={draggableRectReference}
          onClick={handleClick}
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
        <URLImage
          src="https://lifenethealth.visualstudio.com/8f99a695-9545-4cb5-a249-dbfe0d365a3f/_apis/git/repositories/92dd74a8-03df-4361-aaa0-32fe4091992f/items?path=/ProcessingLogs/ProcessingLogs_iOS/ProcessingLogs_Aortoilliac/Resources/AortoIliacArteryDiagram.png&versionDescriptor%5BversionOptions%5D=0&versionDescriptor%5BversionType%5D=0&versionDescriptor%5Bversion%5D=master&resolveLfs=true&%24format=octetStream&api-version=5.0"
          x={0}
          y={0}
        />
      </Layer>
      <Layer>
        {rects.map((eachRect) => (
          <Arrow
            name="toolbarArrow"
            points={[eachRect.x - 100, eachRect.y, eachRect.x, eachRect.y]}
            fill="black"
            stroke="black"
            ref={draggableRectReference}
            draggable={eachRect.draggable}
            key={eachRect.x + eachRect.y}
            // onClick={handleClick}
            // onDragEnd={}
          />
        ))}
      </Layer>
      <Layer>
        <ToolBar />
      </Layer>
    </Stage>
  );
};

export default Konva;
