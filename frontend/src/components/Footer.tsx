import useStyles from "../styles/FooterStyles";

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
