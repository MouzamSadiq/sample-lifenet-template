import React, { useRef } from "react";
import KonvaGround from "./Konva/Konva";
import { Box, Typography, Button } from "@mui/material";
import jsPDF from "jspdf";

const Home = () => {
  const containerRef = useRef<any>(null);
  //Basic PDF Export functonality
  const createPDF = async () => {
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await document.querySelector("#button");
    pdf.html(data).then(() => {
      pdf.save("shipping_label.pdf");
    });
  };

  return (
    <>
      <Box onClick={createPDF}>hai</Box>
      <Box id="pdf" mb={15}>
        <p>TO: John Citizen</p>
        <p>123 Random Street</p>
        <p>Oak Creek, Colorado (CO), 80467</p>
      </Box>
      <div className="App" ref={containerRef}>
        <KonvaGround />
      </div>
    </>
  );
};

export default Home;
