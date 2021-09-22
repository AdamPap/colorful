import { useContext } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ColorShadesContext } from "../contexts/ColorShadesContext";
import styles from "../styles/PaletteStyles";
import ColorBox from "./ColorBox";
import Header from "./Header";
import { ColorFormatContext } from "../contexts/ColorFormatContext";
import Footer from "./Footer";

// This would be needed if the props where passed:
// palette = {palettes[4]}
// interface PaletteProps {
//   palette: Palette;
// }

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

const Palette = (palette: NewPalette) => {
  const { level } = useContext(ColorShadesContext);
  const { format } = useContext(ColorFormatContext);
  const classes = useStyles();

  return (
    <div className={classes.palette}>
      <Header />
      <div className={classes.colors}>
        {palette.colors[level].map((color: NewColor) => {
          return (
            <ColorBox
              name={color.name}
              key={color.name}
              color={color}
              paletteId={palette.id}
              background={color[format]}
            />
          );
        })}
      </div>
      <Footer {...palette} />
    </div>
  );
};

export default Palette;
