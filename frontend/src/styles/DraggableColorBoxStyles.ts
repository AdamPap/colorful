import { createStyles, makeStyles } from "@material-ui/core";
import sizes from "./sizes";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    cursor: "pointer",
    marginBottom: "-5px",
    position: "relative",
    color: "rgba(0,0,0, 0.5)",
    // cursor: "pointer",
    // "&:hover, &:active": {
    //   cursor: " grab",
    //   color: "white!important",
    // },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  boxContent: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5px 5px 5px",
    alignItems: "center",
    userSelect: "none" /* Non-prefixed version, currently
                                 supported by Chrome and Opera */,
  },
  colorName: {
    textTransform: "uppercase",
  },
  deleteIcon: {
    color: "black",
    "&:hover": {
      color: "white",
      transform: "scale(1.3)",
      transition: "all 0.25s ease-in-out",
    },
  },
};

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

export default useStyles;
