import { Text, Line, Group } from "react-konva";

function ConduitLength({value}: any) {
  return (
    <Group x={30} y={170}>
      <Text
        text="Conduit Length"
        fontSize={12}
        fontFamily="Arial"
        fill="black"
        width={100}
      />
      <Text
        x={100}
        text={`Length (cm) `}
        fontSize={12}
        fontFamily="Arial"
        fill="black"
        width={100}
      />
      <Text
        x={170}
        text={value ?? "8.0"}
        fontSize={12}
        fontFamily="Arial"
        fill="black"
        width={100}
      />
      <Line
        points={[0, 15, 200, 15]}
        stroke="#aaa"
        strokeWidth={1}
        dash={[5, 5]}
      />
    </Group>
  );
}

export default ConduitLength;
