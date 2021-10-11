import { ChangeEvent, SyntheticEvent, useContext, useState } from "react";
import Link from "next/link";
import { ColorShadesContext } from "../contexts/ColorShadesContext";
import {
  Typography,
  Slider,
  makeStyles,
  createStyles,
  Snackbar,
  Slide,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import headerStyles from "../styles/HeaderStyles";
import SelectFormat from "./SelectFormat";
import { ColorFormatContext } from "../contexts/ColorFormatContext";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(headerStyles));

const Header = ({ isAllColorsPalette }: HeaderProps) => {
  const [value, setValue] = useState(500);
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);
  const { level, changeLevel } = useContext(ColorShadesContext);
  const { format } = useContext(ColorFormatContext);
  const { logo, header, slider, sliderContainer } = useStyles();

  // TODO: find better solution for any
  const handleChange = (evt: ChangeEvent<{}>, newValue: any): void => {
    setValue(newValue);
    changeLevel(newValue);
  };

  const handleClose = () => {
    setIsSnackbarOpen(false);
  };

  const showSnackbar = () => {
    setIsSnackbarOpen(true);
  };

  return (
    <header className={header}>
      <h1 className={logo}>
        <Link href={"/"}>Colorful</Link>
      </h1>
      {isAllColorsPalette && (
        <div className={sliderContainer}>
          <Typography>{`Shade Level: ${level}`}</Typography>
          <Slider
            value={value}
            className={slider}
            defaultValue={level}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={100}
            marks
            min={100}
            max={900}
            valueLabelDisplay="auto"
            onChange={handleChange}
          />
        </div>
      )}
      <SelectFormat showSnackbar={showSnackbar} />
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={isSnackbarOpen}
        message={
          <span id="message-id">{`Color format changed to ${format.toUpperCase()}`}</span>
        }
        onClose={handleClose}
        TransitionComponent={Slide}
        autoHideDuration={3000}
        // ContentProps={{"aria-describeby": "message-id"}}
        action={
          <IconButton
            onClick={handleClose}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        }
      />
    </header>
  );
};

export default Header;
