import { Image } from "react-konva";
import React, { useEffect, useState } from "react";

export const URLImage: React.FC<{ src: string }> = ({ src }) => {
  // Calculate the position to center the image
  const imageX = (window.innerWidth - 355) / 2;
  const imageY = (window.innerHeight - 377.5) / 2; // 377.5 is from imageHeight -  toolbar bar height

  const [image, setImage] = useState<HTMLImageElement>();
  // console.log("Image X and Y>><<<<<<", imageX, imageY);
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = src;
    img.onload = () => {
      setImage(img);
    };
  }, [src]);

  return (
    <>
      <Image image={image} x={-81} y={116} width={750} height={700} draggable />
    </>
  );
};
