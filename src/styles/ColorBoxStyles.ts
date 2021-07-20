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
};

export default colorBoxStyles;
