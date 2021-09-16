import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import { useRouter } from "next/router";
import { generatePalette } from "../../colorHelpers";
import Palette from "../../components/Palette";
import ColorFormatProvider from "../../contexts/ColorFormatContext";
import ColorShadesProvider from "../../contexts/ColorShadesContext";
import palettes from "../../seedColors";
import { useEffect, useState } from "react";

const PaletteShow = () => {
  const router = useRouter();
  const [paletteId, setPaletteId] = useState("material-ui-colors");

  // TODO:
  // This is a temporary fix. In the first render the default state
  // shows until the second where the lookup is being populated.
  useEffect(() => {
    if (!router.isReady) return;

    // codes using router.query
    const id = router.query.paletteId as string;
    setPaletteId(id);
  }, [router.isReady, router.query]);

  const findPalette = (paletteId: string): Palette => {
    const lookup: Palette = palettes
      .filter((palette) => {
        console.log(palette.id === paletteId);
        return palette.id === paletteId;
      })
      .pop()!;

    return lookup;
  };

  return (
    <div>
      <ColorShadesProvider>
        <ColorFormatProvider>
          <Palette {...generatePalette(findPalette(paletteId))} />
        </ColorFormatProvider>
      </ColorShadesProvider>
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { slug } = context.params as IParams;
//   return slug;
// };

export default PaletteShow;
