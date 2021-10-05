import Delete from "@material-ui/icons/Delete";
import { useState } from "react";
import { SortableElement } from "react-sortable-hoc";
import useStyles from "../styles/DraggableColorBoxStyles";

interface DraggableColorBoxProps {
  name: string;
  color: string;
  deleteColor: (name: string) => void;
}

const DraggableColorBox = SortableElement(
  ({ name, color, deleteColor }: DraggableColorBoxProps) => {
    const classes = useStyles();

    // const [cursor, setCursor] = useState("grab");

    const handleDelete = () => {
      deleteColor(name);
    };

    // TODO: Issues with sortlable-HOC
    // const changeCursorToGrabbing = () => {
    //   setCursor("grabbing");
    // };

    // const changeCursorToGrab = () => {
    //   setCursor("grab");
    // };

    return (
      <div
        className={classes.root}
        style={{ backgroundColor: color }}
        // onMouseDown={changeCursorToGrabbing}
        // onMouseUp={changeCursorToGrab}
      >
        <div className={classes.boxContent}>
          <span className={classes.colorName}>{name}</span>
          <Delete className={classes.deleteIcon} onClick={handleDelete} />
        </div>
      </div>
    );
  }
);

export default DraggableColorBox;
