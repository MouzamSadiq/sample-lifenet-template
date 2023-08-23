import { Rect, Text, Group } from "react-konva";

function Legend({ value }: any) {
  return (
    <Group x={415} y={170}>
      <Rect height={60} width={150} stroke="#d3d3d3" />
      <Text
        x={20}
        y={10}
        text="LC - Left Coronary"
        fontSize={12}
        fontFamily="Arial"
        fill="black"
      />
      <Text
        x={20}
        y={40}
        text="RC - Right Coronary"
        fontSize={12}
        fontFamily="Arial"
        fill="black"
      />
    </Group>
  );
}

export default Legend;
