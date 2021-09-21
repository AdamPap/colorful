import { GetStaticProps, InferGetStaticPropsType } from "next";
import { useContext, useEffect, useState } from "react";
import { getScale } from "../../../colorHelpers";
import { PaletteContext } from "../../../contexts/PaletteContext";

const ColorShow = ({
  colorId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { palettes } = useContext(PaletteContext);

  const colorNames = palettes.map((palette) => {});
  // const [shades, setShades] = useState([] as any);

  // useEffect(() => {
  //   return () => {
  //     setShades(getShades(color));
  //   };
  // });

  // const getShades = (colorName: string) => {
  //   let shades: NewColor[] = [];
  //   let allColors = palette.colors;

  //   for (let key in allColors) {
  //     shades = shades.concat(
  //       // for each shade (key) find the color
  //       allColors[key].filter((color: NewColor) => color.name === colorName)
  //     );
  //   }

  //   return shades;
  // };

  return (
    <div>
      <h1>Single color page {colorId}</h1>
    </div>
  );
};

export async function getStaticPaths() {
  let paths: { params: { colorId: string } }[] = [];

  return {
    paths,
    // fallback false if you know all the slugs that you want
    // to generate ahead of time
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const colorId = context.params?.colorId;
  return { props: { colorId } };
};

export default ColorShow;
