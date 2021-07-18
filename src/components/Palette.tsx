import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles/PaletteStyles";
import ColorBox from "./ColorBox";

interface Color {
  name: string;
  color: string;
}

interface Palette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
}

// This would be needed if the props where passed:
// palette = {palettes[4]}
// interface PaletteProps {
//   palette: Palette;
// }

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

const Palette = (palette: Palette) => {
  const classes = useStyles();
  return (
    <div className={classes.palette}>
      {/* NAV */}
      <div className={classes.colors}>
        {palette.colors.map((color) => {
          return (
            <ColorBox key={Math.random() * 1000} background={color.color} />
          );
        })}
      </div>
      {/* FOOTER */}
    </div>
  );
};

export default Palette;
