import { createContext, useState } from "react";

const contextDefaultValues: NewPaletteContextState = {
  newPalette: [],
  changePalette: () => [],
};

export const NewPaletteContext =
  createContext<NewPaletteContextState>(contextDefaultValues);

const NewPaletteProvider = ({ children }: ProviderChildren) => {
  const [newPalette, setNewPalette] = useState([] as Color[]);

  const changePalette = (newPalette: Color[]) => {
    setNewPalette(newPalette);
    return newPalette;
  };

  return (
    <NewPaletteContext.Provider value={{ newPalette, changePalette }}>
      {children}
    </NewPaletteContext.Provider>
  );
};
