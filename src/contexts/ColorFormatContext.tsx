import { createContext, useState } from "react";

const contextDefaultValues: ColorFormatContextState = {
  format: "hex",
  changeFormat: () => "hex",
};

export const ColorFormatContext =
  createContext<ColorFormatContextState>(contextDefaultValues);

const ColorFormatProvider = ({ children }: ColorFormatChildren) => {
  const [format, setFormat] = useState("hex");

  const changeFormat = (newFormat: string) => {
    setFormat(newFormat);
    return newFormat;
  };

  return (
    <ColorFormatContext.Provider value={{ format, changeFormat }}>
      {children}
    </ColorFormatContext.Provider>
  );
};

export default ColorFormatProvider;
