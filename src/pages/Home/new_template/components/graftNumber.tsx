import { Text, Group } from "react-konva";

function GraftNumber({ value ,x ,y }: any) {
  return (
    <Group x={x} y={y}>
      <Text
        text={`Graft Identification Number : `}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={595}
      />
      <Text
        x={135}
        text={value ?? "8723879324789"}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={595}
      />
    </Group>
  );
}

export default GraftNumber;
