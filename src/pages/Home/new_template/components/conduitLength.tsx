import { Text, Line, Group } from "react-konva";

function ConduitLength({name, value, x, y, underline}: any) {
  return (
    <Group x={x} y={y}>
      <Text
        text={name??"Conduit Length"}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={80}
      />
      <Text
        x={90}
        text={`Length (cm) `}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={80}
      />
      <Text
        x={150}
        text={value ?? "8.0"}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
        width={80}
      />
      {underline&&<Line
        points={[0, 15, 180, 15]}
        stroke="#aaa"
        strokeWidth={1}
        dash={[5, 5]}
      />}
    </Group>
  );
}

export default ConduitLength;
