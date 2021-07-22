import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";
import palettes from "../seedColors";

const palette = () => {
  console.log(generatePalette(palettes[2]));
  return (
    <div>
      <Palette {...palettes[4]} />
    </div>
  );
};

export default palette;
