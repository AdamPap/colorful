import { createStyles, makeStyles } from "@material-ui/styles";
import { CSSProperties } from "react";
import colorBoxStyles from "../styles/ColorBoxStyles";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(colorBoxStyles));

const ColorBox = (background: CSSProperties) => {
  const classes = useStyles();
  return (
    <div style={background} className={classes.colorBox}>
      Colorbox
    </div>
  );
};

export default ColorBox;
