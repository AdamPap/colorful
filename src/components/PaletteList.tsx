import Link from "next/link";

const PaletteList = ({ palettes }: PaletteList) => {
  console.log(palettes);
  const palettesNames = palettes.map((palette) => {
    return (
      <p key={palette.id}>
        <Link href={`/palettes/${palette.id}`} key={palette.id}>
          {palette.paletteName}
        </Link>
      </p>
    );
  });

  return <ul>{palettesNames}</ul>;
};

export default PaletteList;
