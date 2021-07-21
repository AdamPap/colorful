import { CopyToClipboard } from "react-copy-to-clipboard";
import { createStyles, makeStyles } from "@material-ui/styles";
import colorBoxStyles from "../styles/ColorBoxStyles";

interface ColorBoxProps {
  background: string;
  name: string;
}

// @ts-ignore
const useStyles = makeStyles(() => createStyles(colorBoxStyles));

const ColorBox = ({ background, name }: ColorBoxProps) => {
  const { colorBox, copyButton, copyContainer, colorName, more, boxContent } =
    useStyles();

  return (
    <CopyToClipboard
      text={background}
      onCopy={() => console.log("Copied: ", background)}
    >
      <div style={{ background }} className={colorBox}>
        <div className={copyContainer}>
          <div className={boxContent}>
            <span className={colorName}>{name}</span>
          </div>
          <button className={copyButton}>Copy</button>
        </div>
        <span className={more}>More</span>
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
