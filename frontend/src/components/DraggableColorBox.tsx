import Delete from "@material-ui/icons/Delete";
import useStyles from "../styles/DraggableColorBoxStyles";

interface DraggableColorBoxProps {
  name: string;
  color: string;
  deleteColor: (name: string) => void;
}

const DraggableColorBox = ({
  name,
  color,
  deleteColor,
}: DraggableColorBoxProps) => {
  const classes = useStyles();

  const handleDelete = () => {
    console.log("Deleting...");
    deleteColor(name);
  };

  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        <Delete className={classes.deleteIcon} onClick={handleDelete} />
      </div>
    </div>
  );
};

export default DraggableColorBox;
