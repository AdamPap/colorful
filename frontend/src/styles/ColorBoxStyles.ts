interface heightProps {
  showingFullPalette: boolean;
}

const colorBoxStyles = {
  colorBox: {
    width: "20%",
    height: (props: heightProps) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-5px",
    "&:hover button": {
      opacity: 1,
    },
  },
  boxContent: {
    position: "absolute",
    bottom: "5px",
    left: "5px",
  },
  copyContainer: {},
  copyButton: {
    position: "absolute",
    height: "30px",
    width: "80px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    borderRadius: "10px",
    background: "rgba(255, 255, 255, 0.2)",
    color: "black",
    border: "none",
    cursor: "pointer",
    opacity: 0,
  },
  more: {
    position: "absolute",
    background: "rgba(255, 255, 255, 0.3)",
    bottom: "0",
    right: "0",
    padding: "5px 10px",
  },
  colorName: {
    fontWeight: "400",
    fontSize: "0.8rem",
    letterSpacing: "0.06rem",
  },
  copyOverlay: {
    opacity: "0",
    position: "absolute",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.8s ease-in-out",
    transform: "scale(0.1)",
  },
  copyOverlayShow: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    right: "0",
    top: "0",
    bottom: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      background: "rgba(255, 255, 255, 0.2)",
      width: "100%",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMessage: {
    opacity: "1",
    transform: "scale(1)",
    zIndex: "25",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.4s",
  },
  copyText: {},
};

export default colorBoxStyles;