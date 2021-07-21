const colorBoxStyles = {
  colorBox: {
    width: "20%",
    height: "25%",
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
  colorName: {},
  copyOverlay: {
    opacity: "0",
    position: "absolute",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  copyOverlayShow: {
    opacity: "1",
    zIndex: "10",
    transform: "scale(50)",
    position: "absolute",
  },
};

export default colorBoxStyles;
