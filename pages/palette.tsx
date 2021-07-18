import Palette from "../src/components/Palette";
import palettes from "../src/seedColors";

const palette = () => {
  return (
    <div>
      <Palette {...palettes[4]} />
    </div>
  );
};

export default palette;
