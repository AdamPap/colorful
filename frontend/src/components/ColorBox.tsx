import { useState, useEffect } from "react";
import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import classNames from "classnames";
import { createStyles, makeStyles } from "@material-ui/styles";
import colorBoxStyles from "../styles/ColorBoxStyles";
import chroma from "chroma-js";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(colorBoxStyles));

const ColorBox = ({
  background,
  name,
  color,
  paletteId,
  showingFullPalette,
}: ColorBoxProps) => {
  const [copied, setCopied] = useState(false);

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() >= 0.5;

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

  const colorId = name.replace(/\s/g, "-");

  const {
    colorBox,
    copyButton,
    copyContainer,
    lightText,
    darkText,
    colorName,
    more,
    boxContent,
    copyOverlay,
    copyOverlayShow,
    copyMessage,
    showMessage,
    copyText,
  } = useStyles({ showingFullPalette });

  const changeCopyState = () => {
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
          <h1 className={classNames({ [copyText]: isLightColor })}>copied!</h1>
          <p className={classNames({ [copyText]: isLightColor })}>
            {background}
          </p>
        </div>
        <div className={copyContainer}>
          <div className={boxContent}>
            <span
              className={classNames(colorName, {
                [lightText]: isDarkColor,
              })}
            >
              {name.toUpperCase()}
            </span>
          </div>
          <button className={copyButton}>Copy</button>
        </div>
        {showingFullPalette && (
          <Link passHref href={`/palettes/${paletteId}/${colorId}`}>
            <span
              onClick={(e) => e.stopPropagation()}
              className={classNames(more, {
                [darkText]: isLightColor,
              })}
            >
              More
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};

export default ColorBox;
