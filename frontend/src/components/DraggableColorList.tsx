import { SortableContainer } from "react-sortable-hoc";
import DraggableColorBox from "./DraggableColorBox";

const DraggableColorList = SortableContainer(
  ({ colors, deleteColor }: DraggableColorListProps) => {
    return (
      <div style={{ height: "100%" }}>
        {colors.map((color, i) => {
          return (
            <DraggableColorBox
              index={i}
              key={color.name}
              name={color.name}
              color={color.color}
              deleteColor={deleteColor}
            />
          );
        })}
      </div>
    );
  }
);

export default DraggableColorList;
