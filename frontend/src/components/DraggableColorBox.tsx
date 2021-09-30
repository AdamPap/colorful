import Delete from "@material-ui/icons/Delete";
import useStyles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ name, color }: Color) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        <Delete className={classes.deleteIcon} />
      </div>
    </div>
  );
};

export default DraggableColorBox;
