import Palette from "../components/Palette";
import palettes from "../src/seedColors";

const palette = () => {
  return (
    <div>
      <Palette palette={palettes[4]} />
    </div>
  );
};

export default palette;
