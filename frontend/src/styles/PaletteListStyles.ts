import sizes from "./sizes";

const styles = {
  "@global": {
    ".fade-exit": {
      opacity: 1,
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms eae-out",
    },
  },
  PaletteList: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridGap: "20px",
    [sizes.down("sm")]: {
      gridTemplateColumns: "auto auto",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "auto",
    },
  },
};

export default styles;
