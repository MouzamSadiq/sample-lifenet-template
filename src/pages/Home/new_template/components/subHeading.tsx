import { Group, Line, Text } from "react-konva";

function SubHeading({ value, y, underline }: any) {
  return (
    <Group y={y}>
      <Text
      text={value ?? "Aortic Allograft Size"}
      fontSize={16}
      fontFamily="Arial"
      fontVariant="bold"
      fill="#1e4f7c"
      align="center"
      width={595}
    />
    {underline&&<Line
      points={[200, 20, 400, 20]}
      stroke="#aaa"
      strokeWidth={1}
      // dash={[5, 5]}
    />}
    </Group>
  );
}

export default SubHeading;
