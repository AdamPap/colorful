import sizes from "./sizes";

const styles = {
  // PaletteList: {
  //   display: "flex",
  //   flexWrap: "wrap" as "wrap",
  //   justifyContent: "space-around",
  //   alignItems: "flex-start",
  // },
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
