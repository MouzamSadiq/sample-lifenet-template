import { Text } from "react-konva";

function Heading({ value }: any) {
  return (
    <Text
      y={30}
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
