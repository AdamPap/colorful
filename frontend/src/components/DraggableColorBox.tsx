import useStyles from "../styles/DraggableColorBoxStyles";

interface DraggableColorBoxProps {
  color: string;
}

const DraggableColorBox = ({ color }: DraggableColorBoxProps) => {
  const classes = useStyles();
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {color}
    </div>
  );
};

export default DraggableColorBox;
