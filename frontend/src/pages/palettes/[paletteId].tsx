import { useRouter } from "next/router";
import { generatePalette, findPalette } from "../../colorHelpers";
import Palette from "../../components/Palette";
import { useContext, useEffect, useState } from "react";
import { PaletteContext } from "../../contexts/PaletteContext";

const PaletteShow = () => {
  const { palettes } = useContext(PaletteContext);

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

  return <Palette {...generatePalette(findPalette(paletteId, palettes))} />;
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   const { slug } = context.params as IParams;
//   return slug;
// };

export default PaletteShow;
