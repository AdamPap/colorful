import { createStyles, makeStyles } from "@material-ui/styles";
import Link from "next/link";
import styles from "../styles/MiniPaletteStyles";

const useStyles = makeStyles(() => createStyles(styles));

const MiniPalette = (palette: Palette) => {
  const classes = useStyles();
  const colors = palette.colors.map((color: Color) => (
    <div
      key={color.name}
      style={{ background: `${color.color}` }}
      className={classes.color}
    ></div>
  ));

  return (
    <div className={classes.root}>
      <Link passHref href={`/palettes/${palette.id}`} key={palette.id}>
        <a>
          <div className={classes.colorContainer}>{colors}</div>
          <div className={classes.footer}>
            <p>{palette.paletteName}</p>
            <p className={classes.emoji}>{palette.emoji}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default MiniPalette;
