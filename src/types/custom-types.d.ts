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

interface NewColor {
  name: string;
  id: string;
  hex: string;
  rgb: string;
  rgba: string;
}

interface NewPalette {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { [key: number]: NewColor[] };
}

interface ColorBoxProps {
  background: string;
  name: string;
}
