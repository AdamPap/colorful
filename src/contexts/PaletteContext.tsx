import { createContext, useState } from "react";
import { default as pal } from "../seedColors";

const contextDefaultValues: PaletteContextState = {
  palettes: pal,
  changePalettes: () => null,
};

export const PaletteContext =
  createContext<PaletteContextState>(contextDefaultValues);

const PaletteProvider = ({ children }: ProviderChildren) => {
  // Without <Palette[]> it has type never[]
  // that cause an error on setPalettes
  const [palettes, setPalettes] = useState<Palette[]>(pal);

  const changePalettes = (newPalettes: Palette[]) => {
    setPalettes(newPalettes);
  };

  return (
    <PaletteContext.Provider value={{ palettes, changePalettes }}>
      {children}
    </PaletteContext.Provider>
  );
};

export default PaletteProvider;
