import { Text, Group } from "react-konva";
import ConduitLength from "./conduitLength";

function ValueTable({ x, y, data }: any) {
  let gap = 0;
  return (
    <Group x={x} y={y}>
      {Object.keys(data).map((heading: any, index: any) => {
        if (index !== 0) {
          gap = gap + 30;
        }

        return (
          <div key={heading}>
            <Text
              x={10}
              y={gap}
              text={heading}
              fontSize={10}
              fontFamily="Arial"
              fontVariant="bold"
              fill="#1e4f7c"
            />
            {data[heading].map((item: any, index: any) => {
              gap = gap + 20;
              const [key, value]: any = Object.entries(item)[0];
              return <ConduitLength name={key} value={value} x={10} y={gap} />;
            })}
          </div>
        );
      })}
    </Group>
  );
}

export default ValueTable;
