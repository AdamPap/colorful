import chroma from "chroma-js";
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

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

function generatePalette(starterPalette: Palette) {
  let newPalette: NewPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {},
  };

  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  for (let color of starterPalette.colors) {
    let scale = getScale(color.color, 10).reverse();

    for (let i in scale) {
      newPalette.colors[levels[i]].push({
        name: `color.name ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, "-"),
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace("rgb", "rgba")
          .replace(")", ",1.0)"),
      });
    }
  }
  return newPalette;
}

function getRange(hexColor: string) {
  const end = "#fff";
  return [chroma(hexColor).darken(1.4).hex(), hexColor, end];
}

function getScale(hexColor: string, numberOfColors: number) {
  return chroma.scale(getRange(hexColor)).mode("lab").colors(numberOfColors);
}

export { generatePalette };
