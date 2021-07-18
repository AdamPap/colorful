import { createStyles, makeStyles } from "@material-ui/styles";
import { CSSProperties } from "react";
import colorBoxStyles from "../styles/ColorBoxStyles";

interface ColorBoxProps {
  background: string;
  name: string;
}

// @ts-ignore
const useStyles = makeStyles(() => createStyles(colorBoxStyles));

const ColorBox = ({ background, name }: ColorBoxProps) => {
  const classes = useStyles();
  return (
    <div style={{ background }} className={classes.colorBox}>
      <span>{name}</span>
    </div>
  );
};

export default ColorBox;
