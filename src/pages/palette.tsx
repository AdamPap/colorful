import { generatePalette } from "../colorHelpers";
import Palette from "../components/Palette";
import ColorFormatProvider from "../contexts/ColorFormatContext";
import ColorShadesProvider from "../contexts/ColorShadesContext";
import palettes from "../seedColors";

const palette = () => {
  // const findPalette  = (id: string) => {
  //   palettes.find( (palette) => palette.id === id)
  // }

  return (
    <div>
      <ColorShadesProvider>
        <ColorFormatProvider>
          <Palette {...generatePalette(palettes[1])} />
        </ColorFormatProvider>
      </ColorShadesProvider>
    </div>
  );
};

export default palette;
