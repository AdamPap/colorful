import { makeStyles, createStyles } from "@material-ui/core";
import MiniPalette from "./MiniPalette";
import styles from "../styles/PaletteListStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const useStyles = makeStyles(() => createStyles(styles));

const PaletteList = ({ palettes }: PaletteList) => {
  const classes = useStyles();

  const palettesNames = palettes.map((palette) => {
    return (
      <CSSTransition key={palette.id} classNames="fade" timeout={400}>
        <MiniPalette key={palette.id} {...palette} />
      </CSSTransition>
    );
  });

  return (
    <TransitionGroup className={classes.PaletteList}>
      {palettesNames}
    </TransitionGroup>
  );
};

export default PaletteList;
