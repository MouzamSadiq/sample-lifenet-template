import { Stage, Layer, Rect, Text, Line, Image, Group } from "react-konva";
import SubHeading from "./components/subHeading";
import Legend from "./components/legend";
import Diagram from "./components/diagram";
import Heading from "./components/heading";
import GraftNumber from "./components/graftNumber";
import ValueTable from "./components/valueTable";

function PdfTemplate3(props : any) {
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = props.img??"/row_1.png";
  let data = {
    "Pulmonary Artery lengths": [
      {"RPA": "2.0"},
      {"LPA": "1.5"}
    ],
    "Main Conduit Measurements": [
      {"Left": "3.5"},
      {"Right": "2.5"},
      {"Midline": "4.5"},
    ]
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "595px", height: "842px" }}>
        <Stage style={{ border: "1px solid black" }} width={595} height={842}>
          <Layer>
            <Heading value={props.heading} y={30} />
            <SubHeading value={props.subheading} y={80} underline />
            <GraftNumber value={props.gin} x={30} y={125} />
            <Legend value= {props.legend} x={30} y={150} height={50} width={150} data={["LPA - Left Pulmonary Artery", "RPA - Right Pulmonary Artery"]} />
            <ValueTable x={360} y={125} data={data} />
          </Layer>

          <Diagram image={"/row_1.png"}/>
        </Stage>
      </div>
    </div>
  );
}

export default PdfTemplate3;
