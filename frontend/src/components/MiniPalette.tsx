import Delete from "@material-ui/icons/Delete";
import Link from "next/link";
import { useContext } from "react";
import { PaletteContext } from "../contexts/PaletteContext";
import useStyles from "../styles/MiniPaletteStyles";

const MiniPalette = (palette: Palette) => {
  const classes = useStyles();

  const { palettes, changePalettes } = useContext(PaletteContext);

  const colors = palette.colors.map((color: Color) => (
    <div
      key={color.name}
      style={{ background: `${color.color}` }}
      className={classes.color}
    ></div>
  ));

  const deletePalette = () => {
    const newPalettes = palettes.filter((p) => p.id !== palette.id);
    changePalettes(newPalettes);
  };

  return (
    <div className={classes.root}>
      <div className={classes.delete} onClick={deletePalette}>
        <Delete fontSize="small" />
      </div>
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
