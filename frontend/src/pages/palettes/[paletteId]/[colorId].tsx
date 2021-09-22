import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FC, useContext, useEffect, useState } from "react";
import { PaletteContext } from "../../../contexts/PaletteContext";
import { generatePalette, findPalette } from "../../../colorHelpers";
import { useRouter } from "next/router";

const ColorShow: FC = ({
  colorId,
  paletteId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  const [palette, setPalette] = useState({} as NewPalette);
  const [statePaletteId, setStatePaletteId] = useState("");
  const [stateColorId, setStateColorId] = useState("");
  const [shades, setShades] = useState([] as NewColor[]);

  const { palettes } = useContext(PaletteContext);

  useEffect(() => {
    if (router && router.query) {
      const pid = router.query.paletteId as string;
      const cid = router.query.colorId as string;
      setStatePaletteId(pid);
      setStateColorId(cid);
      if (statePaletteId) {
        setPalette(generatePalette(findPalette(statePaletteId, palettes)));
      }
    }
  }, [router, statePaletteId, stateColorId, palettes]);

  useEffect(() => {
    if (palette && stateColorId) {
      setShades(gatherShades(palette, stateColorId.split("-").shift()!));
    }
  }, [palette, stateColorId]);

  const gatherShades = (palette: NewPalette, colorToFilterBy: string) => {
    let shades: NewColor[] = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(
          (color: NewColor) => color.id === colorToFilterBy.toLocaleLowerCase()
        )
      );
    }
    return shades;
  };

  return (
    <div>
      <h1>
        Single color page {colorId} of {paletteId}
      </h1>
      {shades.map((shade) => (
        <li
          style={{
            height: "100px",
            width: "100px",
            background: `${shade.hex}`,
          }}
          key={shade.name}
        ></li>
      ))}
    </div>
  );
};

export async function getStaticPaths() {
  let paths: { params: { colorId: string; paletteId: string } }[] = [];

  return {
    paths,
    // fallback false if you know all the slugs that you want
    // to generate ahead of time
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const colorId = context.params?.colorId;
  const paletteId = context.params?.paletteId;
  return { props: { colorId, paletteId } };
};

export default ColorShow;
