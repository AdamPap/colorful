import Delete from "@material-ui/icons/Delete";
import Link from "next/link";
import useStyles from "../styles/MiniPaletteStyles";

interface MiniPaletteProps {
  palette: Palette;
  showDialog: (pid: string) => void;
}

const MiniPalette = ({ palette, showDialog }: MiniPaletteProps) => {
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
      <div className={classes.delete} onClick={() => showDialog(palette.id)}>
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
