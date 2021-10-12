import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import sizes from "./sizes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    buttonContainer: {
      display: "flex",
      justifyContent: "space-around",
      padding: "6px 16px",
    },
    button: {
      width: "48%",
      textAlign: "center",
    },
  })
);

export default useStyles;
