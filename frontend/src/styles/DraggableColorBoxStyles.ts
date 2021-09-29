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
  },
  colorName: {
    position: "absolute",
  },
};

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

export default useStyles;
