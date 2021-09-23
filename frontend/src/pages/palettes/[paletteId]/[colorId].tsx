import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { FC, useContext, useEffect, useState } from "react";
import { PaletteContext } from "../../../contexts/PaletteContext";
import { generatePalette, findPalette } from "../../../colorHelpers";
import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ColorBox from "../../../components/ColorBox";
import { ColorFormatContext } from "../../../contexts/ColorFormatContext";
import { makeStyles, createStyles } from "@material-ui/core";
import styles from "../../../styles/ColorShowStyles";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(styles));

const ColorShow: FC = ({
  colorId,
  paletteId,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const classes = useStyles();

  const [palette, setPalette] = useState({} as NewPalette);
  const [statePaletteId, setStatePaletteId] = useState("");
  const [stateColorId, setStateColorId] = useState("");
  const [shades, setShades] = useState([] as NewColor[]);

  const { palettes } = useContext(PaletteContext);
  const { format } = useContext(ColorFormatContext);

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
    return shades.slice(1);
  };

  return (
    // TODO: refactor the outside divs here and in Palette
    <div style={{ height: "100vh" }}>
      <Header isAllColorsPalette={false} />
      <div
        style={{
          height: "90%",
          // overflow: "hidden",
        }}
      >
        {shades.map((shade) => (
          <ColorBox
            name={shade.name}
            key={shade.name}
            color={shade}
            paletteId={palette.id}
            background={shade[format]}
            showingFullPalette={false}
          />
        ))}
        <div className={classes.goBack}>
          <Link href={`/palettes/${palette.id}`}>
            <a className={classes.link}>GO BACK</a>
          </Link>
        </div>
      </div>
      <Footer {...palette} />
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
