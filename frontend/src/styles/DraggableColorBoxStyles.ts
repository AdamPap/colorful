import { createStyles, makeStyles } from "@material-ui/core";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    margin: "0 auto",
    display: "inline-block",
    curson: "pointer",
    marginBottom: "-5px",
    position: "relative",
    color: "rgba(0,0,0, 0.5)",
  },
  boxContent: {
    position: "absolute",
    bottom: "0",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 5px 5px 5px",
    alignItems: "center",
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
