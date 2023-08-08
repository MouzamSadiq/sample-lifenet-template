import React, { useEffect, useState } from "react";
import { Image } from "react-konva";

const TemplateImageholder: React.FC<{ src: string }> = ({ src }) => {
  const [image, setImage] = useState<HTMLImageElement>();
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
      <Image image={image} width={400} height={600} />
    </>
  );
};

export default TemplateImageholder;
