import { createContext, ReactNode, useState } from "react";

const contextDefaultValues: ColorShadesContextState = {
  level: 500,
  changeLevel: () => 500,
};

export const ColorShadesContext =
  createContext<ColorShadesContextState>(contextDefaultValues);

const ColorShadesProvider = ({ children }: ColorShadesChildren) => {
  const [level, setLevel] = useState(500);

  const changeLevel = (newLevel: number) => {
    setLevel(newLevel);
    return newLevel;
  };

  return (
    <ColorShadesContext.Provider
      value={{
        level,
        changeLevel,
      }}
    >
      {children}
    </ColorShadesContext.Provider>
  );
};

export default ColorShadesProvider;
