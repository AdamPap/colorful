import { useRouter } from "next/router";
import { generatePalette, findPalette } from "../../colorHelpers";
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

  return (
    <div>
      <ColorShadesProvider>
        <ColorFormatProvider>
          <Palette {...generatePalette(findPalette(paletteId, palettes))} />
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
