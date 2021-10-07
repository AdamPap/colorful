import { makeStyles, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorContainer: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap" as "wrap",
      borderRadius: "6px",
      overflow: "hidden",
      background: "#F2F2F2",
    },
    color: {
      minHeight: "40px",
      width: "20%",
      height: "25%",
    },
    root: {
      border: "1px solid #f6f6f6",
      borderRadius: "8px",
      overflow: "hidden",
      padding: "6px 6px 0 6px",
      boxShadow: "1px 1px 10px 2px rgba(0,0,0,0.05)",
      position: "relative",
      transition: "all 0.3s ease-in-out",
      "&:hover $delete": {
        opacity: "1",
        visibility: "visible",
      },
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 10px",
    },
    emoji: {
      fontSize: "1.25rem",
      marginLeft: "10px",
    },
    delete: {
      opacity: "0",
      visibility: "hidden",
      position: "absolute",
      right: "0",
      top: "0",
      background: "#eb3d30",
      fontSize: "0.6rem",
      padding: "3px",
      borderRadius: "2px 2px 2px 8px",
      color: "white",
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      "&:hover": {
        background: "#bf3025",
      },
    },
  })
);

export default useStyles;
