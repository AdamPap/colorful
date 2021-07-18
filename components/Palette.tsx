interface Color {
  name: string;
  color: string;
}

interface Palette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: Color[];
}

interface PaletteProps {
  palette: Palette;
}

const Palette = ({ palette }: PaletteProps) => {
  console.log(palette.id);
  return <h1>Palette: {palette.paletteName}</h1>;
};

export default Palette;
