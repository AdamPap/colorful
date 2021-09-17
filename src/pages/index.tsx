import PaletteList from "../components/PaletteList";
import palettes from "../seedColors";

const styles = {
  width: "80%",
  maxWidth: "1000px",
  margin: "0 auto",
};

export default function Home() {
  return (
    <div style={styles}>
      <PaletteList palettes={palettes} />
    </div>
  );
}
