import { makeStyles, createStyles } from "@material-ui/core";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";

const useStyles = makeStyles(() => createStyles(styles));

const PaletteList = ({ palettes }: PaletteList) => {
  const classes = useStyles();

  const palettesNames = palettes.map((palette) => {
    return <MiniPalette key={palette.id} {...palette} />;
  });

  return <div className={classes.PaletteList}>{palettesNames}</div>;
};

export default PaletteList;
