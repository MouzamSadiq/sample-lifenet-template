import { Text, Group } from "react-konva";

function GraftNumber({ value }: any) {
  return (
    <Group x={30} y={80}>
      <Text
        text={`Graft Identification Number : `}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={595}
        draggable
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
