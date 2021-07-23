import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";
import ColorShadesProvider from "../contexts/ColorShadesContext";
import palettes from "../seedColors";

const palette = () => {
  return (
    <div>
      <ColorShadesProvider>
        <Palette {...generatePalette(palettes[1])} />
      </ColorShadesProvider>
    </div>
  );
};

export default palette;
