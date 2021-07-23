import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";
import palettes from "../seedColors";

const palette = () => {
  return (
    <div>
      <Palette {...generatePalette(palettes[1])} />
    </div>
  );
};

export default palette;
