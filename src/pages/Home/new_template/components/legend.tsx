import { Rect, Text, Group } from "react-konva";

function Legend({ x, y, height, width, data}: any) {
  let gap = 10;
  return (
    <Group x={x} y={y}>
      <Rect height={height} width={width} stroke="#d3d3d3" />
      {data.map((element:any, index:number) => {
        if(index!==0){
          gap = gap + 20;
        }
        return (<Text
        x={10}
        y={gap}
        text={element}
        fontSize={10}
        fontFamily="Arial"
        fill="black"
      />)
      })}
    </Group>
  );
}

export default Legend;
