import sizes from "./sizes";

const headerStyles = {
  logo: {
    paddingLeft: "10px",
    // background: "rgb(161,0,49)",
    backgroundImage:
      "linear-gradient(90deg, rgba(45,90,236,1) 0%, rgba(255,0,0,1) 33%, rgba(4,123,196,1) 67%, rgba(59,255,0,1) 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textFillColor: "transparent",
    [sizes.down("xs")]: {
      display: "none",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: "10%",
    justifyContent: "space-around",
  },
  sliderContainer: {
    marginLeft: "50px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "center",
    padding: "5px 25px 0 25px",
    // width: "100%",
    [sizes.down("md")]: {
      marginLeft: "10px",
    },
    [sizes.down("sm")]: {
      padding: "5px",
    },
  },
  slider: {
    width: "300px",
    // marginLeft: "10px",
    [sizes.down("md")]: {
      width: "250px",
    },
    [sizes.down("sm")]: {
      width: "180px",
    },
    [sizes.down("xs")]: {
      width: "140px",
    },
  },
};

export default headerStyles;
