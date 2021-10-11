import sizes from "./sizes";

const selectFormatStyles = {
  selectFormat: {
    width: "300px",
    marginRight: "10px",
    [sizes.down("md")]: {
      width: "200px",
    },
    [sizes.down("xs")]: {
      width: "140px",
    },
  },
};

export default selectFormatStyles;
