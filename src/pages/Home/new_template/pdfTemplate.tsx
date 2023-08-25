import { Stage, Layer, Rect, Text, Line, Image, Group } from "react-konva";
import SubHeading from "./components/subHeading";
import Legend from "./components/legend";
import Diagram from "./components/diagram";
import Heading from "./components/heading";
import GraftNumber from "./components/graftNumber";
import ConduitLength from "./components/conduitLength";

function PdfTemplate(props: any) {
  const img = new window.Image();
  img.crossOrigin = "Anonymous";
  img.src = props.img ?? "/row_1.png";
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "595px", height: "842px" }}>
        <Stage style={{ border: "1px solid black" }} width={595} height={842}>
          <Diagram image={"/row_1.png"} />
          <Layer>
            <Heading value={props.heading} y={30} />
            <GraftNumber value={props.gin} x={30} y={80} />
            <SubHeading value={props.subheading} y={125} />
            <ConduitLength value={props.conduit_length} x={30} y={170} underline />
            <Legend value= {props.legend} x={445} y={170} height={50} width={120} data={["LC - Left Coronary", "RC - Right Coronary"]} />
          </Layer>
        </Stage>
      </div>
    </div>
  );
}

export default PdfTemplate;
