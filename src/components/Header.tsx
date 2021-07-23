import { ChangeEvent, useContext, useState } from "react";
import { ColorShadesContext } from "../contexts/ColorShadesContext";
import {
  Typography,
  Slider,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import headerStyles from "../styles/HeaderStyles";
import SelectFormat from "./SelectFormat";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(headerStyles));

const Header = () => {
  const [value, setValue] = useState(500);
  const { level, changeLevel } = useContext(ColorShadesContext);
  const { logo, header, slider, sliderContainer } = useStyles();

  // TODO: find better solutin for any
  const handleChange = (evt: ChangeEvent<{}>, newValue: any): void => {
    setValue(newValue);
    changeLevel(newValue);
  };

  return (
    <header className={header}>
      <h1 className={logo}>Colorful</h1>
      <div className={sliderContainer}>
        <div className={sliderContainer}>
          <Typography>Select color shade</Typography>
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
            onChangeCommitted={handleChange}
          />
        </div>
        <SelectFormat />
      </div>
    </header>
  );
};

export default Header;
