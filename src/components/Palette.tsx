import { createStyles, makeStyles } from "@material-ui/core/styles";
import styles from "../styles/PaletteStyles";
import ColorBox from "./ColorBox";
import Header from "./Header";

// This would be needed if the props where passed:
// palette = {palettes[4]}
// interface PaletteProps {
//   palette: Palette;
// }

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

const Palette = (palette: NewPalette) => {
  const classes = useStyles();
  return (
    <div className={classes.palette}>
      <Header />
      <div className={classes.colors}>
        {palette.colors[500].map((color: NewColor) => {
          return (
            <ColorBox
              name={color.name}
              key={color.name}
              background={color.hex}
            />
          );
        })}
      </div>
      {/* FOOTER */}
    </div>
  );
};

export default Palette;
