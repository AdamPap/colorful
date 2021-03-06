import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      height: "5vh",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      fontWeight: "bold",
    },
    emoji: {
      margin: "0 1rem",
      fontSize: "1.5rem",
    },
  })
);
export default useStyles;
