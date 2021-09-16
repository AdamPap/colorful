import PaletteList from "../components/PaletteList";
import palettes from "../seedColors";

export default function Home() {
  return (
    <div>
      <PaletteList palettes={palettes} />
    </div>
  );
}
