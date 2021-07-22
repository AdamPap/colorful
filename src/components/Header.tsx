import {
  Typography,
  Slider,
  makeStyles,
  createStyles,
} from "@material-ui/core";
import headerStyles from "../styles/HeaderStyles";

// @ts-ignore
const useStyles = makeStyles(() => createStyles(headerStyles));

const Header = () => {
  const { logo, header, slider, sliderContainer } = useStyles();

  return (
    <div className={header}>
      <h1 className={logo}>Colorful</h1>
      <div className={sliderContainer}>
        <Typography>Select color shade</Typography>
        <Slider
          className={slider}
          defaultValue={0.00000005}
          // getAriaValueText={valuetext}
          aria-labelledby="discrete-slider-small-steps"
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
      </div>
    </div>
  );
};

export default Header;
