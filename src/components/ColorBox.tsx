import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classNames from "classnames";
import { createStyles, makeStyles } from "@material-ui/styles";
import colorBoxStyles from "../styles/ColorBoxStyles";

interface ColorBoxProps {
  background: string;
  name: string;
}

// @ts-ignore
const useStyles = makeStyles(() => createStyles(colorBoxStyles));

const ColorBox = ({ background, name }: ColorBoxProps) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (copied) {
      let copyTimer = setTimeout(() => {
        setCopied(false);
      }, 1500);
      return () => {
        clearTimeout(copyTimer);
      };
    }
  }, [copied]);

  const {
    colorBox,
    copyButton,
    copyContainer,
    colorName,
    more,
    boxContent,
    copyOverlay,
    copyOverlayShow,
    copyMessage,
    showMessage,
    copyText,
  } = useStyles();

  const changeCopyState = () => {
    console.log("COPIED");
    setCopied(true);
  };

  return (
    <CopyToClipboard text={background} onCopy={() => changeCopyState()}>
      <div style={{ background }} className={colorBox}>
        <div
          style={{ background }}
          className={classNames(copyOverlay, {
            [copyOverlayShow]: copied,
          })}
        />
        <div
          className={classNames(copyMessage, {
            [showMessage]: copied,
          })}
        >
          <h1>copied!</h1>
          <p className={copyText}>{background}</p>
        </div>
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
