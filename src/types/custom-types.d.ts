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

interface PaletteList {
  palettes: Palette[];
}

interface NewColor {
  name: string;
  id: string;
  [key: string]: string;
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
  colorId: string;
  paletteId: string;
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

interface SnackbarState {
  open: boolean;
}
