import Link from "next/link";
import PaletteList from "../components/PaletteList";
import palettes from "../seedColors";

const styles = {
  root: {
    width: "80%",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  a: {
    textDecoration: "underline",
  },
  h1: {
    // background: "rgb(161,0,49)",
    backgroundImage:
      "linear-gradient(90deg, rgba(45,90,236,1) 0%, rgba(255,0,0,1) 33%, rgba(4,123,196,1) 67%, rgba(59,255,0,1) 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textFillColor: "transparent",
  },
};

export default function Home() {
  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <h1 style={styles.h1}>Colorful</h1>
        <Link href="/palettes/newPalette">
          <a style={styles.a}>Create Palette</a>
        </Link>
      </div>
      <PaletteList palettes={palettes} />
    </div>
  );
}
