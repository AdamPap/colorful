import { createStyles, makeStyles } from "@material-ui/styles";
import styles from "../styles/FooterStyles";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

const Footer = (palette: NewPalette) => {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      {palette.paletteName}
      <span className={classes.emoji}>{palette.emoji}</span>
    </footer>
  );
};

export default Footer;
