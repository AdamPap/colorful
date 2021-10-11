import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import sizes from "./sizes";

const drawerWidth = 375;
const appBarHeight = 64;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      height: "100vh",
    },
    appBar: {
      // height: `${appBarHeight}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [sizes.down("xs")]: {
        marginRight: "0",
      },
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end",
    },
    content: {
      flexGrow: 1,
      height: `calc(100vh - ${appBarHeight}px)`,
      // padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    navButtons: {
      margin: `0px ${theme.spacing(1)}px`,
      [sizes.down("xs")]: {
        margin: `0px 1px`,
        textAlign: "center",
        padding: "3px 6px",
        fontSize: "0.7rem",
      },
    },
    formWrapper: {
      // width: "100%",
      display: "flex",
      justifyContent: "end",
      alignItems: "center",
    },
    drawerContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    drawerButtons: {
      margin: `${theme.spacing(3)}px ${theme.spacing(1)}px`,
      "& button": {
        margin: theme.spacing(1),
        marginBottom: "0",
        marginTop: "0",
      },
    },
    toolbarWrapper: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
    },
    toolbarTitle: {
      [sizes.down("xs")]: {
        fontSize: "1rem",
      },
    },
  })
);

export default useStyles;
