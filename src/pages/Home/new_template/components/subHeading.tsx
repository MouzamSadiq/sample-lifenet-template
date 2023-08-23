import { Text } from "react-konva";

function SubHeading({ value }: any) {
  return (
    <Text
      y={125}
      text={value ?? "Aortic Allograft Size"}
      fontSize={16}
      fontFamily="Arial"
      fontVariant="bold"
      fill="#1e4f7c"
      align="center"
      width={595}
    />
  );
}

export default SubHeading;
