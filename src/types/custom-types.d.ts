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

interface ColorShadesChildren {
  children: ReactNode;
}

interface ColorShadesContextState {
  level: number;
  changeLevel: (newLevel: number) => number;
}

interface ColorFormatChildren {
  children: ReactNode;
}

interface ColorFormatContextState {
  format: string;
  changeFormat: (newFormat: string) => string;
}
