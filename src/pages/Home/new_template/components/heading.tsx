import { Text } from "react-konva";

function Heading({value, y}: any) {
  return (
    <Text
      y={y}
      text={value ?? "Aortic Valve/Conduit Observation"}
      fontSize={20}
      fontFamily="Arial"
      fontVariant="bold"
      fill="#1e4f7c"
      align="center"
      width={595}
    />
  );
}

export default Heading;
