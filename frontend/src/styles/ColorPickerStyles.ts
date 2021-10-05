import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { ColorResult } from "react-color";

interface Props {
  isPaletteFull: boolean;
  currentColor: ColorResult;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    colorPicker: {
      width: "100%!important",
      marginBottom: theme.spacing(3),
    },
    root: {
      width: "80%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    form: {
      width: "100%",
      marginBottom: theme.spacing(1),
    },
    button: {
      marginTop: "8px",
      width: "100%",
      backgroundColor: (props: Props) =>
        props.isPaletteFull ? "gray" : props.currentColor.hex,
      color: "white",
    },
  })
);

export default useStyles;
