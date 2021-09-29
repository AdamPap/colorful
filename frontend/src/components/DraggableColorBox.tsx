import useStyles from "../styles/DraggableColorBoxStyles";

const DraggableColorBox = ({ name, color }: Color) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <span className={classes.colorName}>{name}</span>
    </div>
  );
};

export default DraggableColorBox;
