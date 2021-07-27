import { useState, useContext, ChangeEvent } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import selectFormatStyles from "../styles/SelectFormatStyles";
import { ColorFormatContext } from "../contexts/ColorFormatContext";

const useStyles = makeStyles(() => createStyles(selectFormatStyles));

const SelectFormat = () => {
  const [value, setValue] = useState("hex");
  const { format, changeFormat } = useContext(ColorFormatContext);
  const { selectFormat } = useStyles();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
    changeFormat(event.target.value as string);
  };

  return (
    <FormControl className={selectFormat}>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="hex">HEX - #ffffff</MenuItem>
        <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
        <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
      </Select>
      <FormHelperText>Select Color Format</FormHelperText>
    </FormControl>
  );
};

export default SelectFormat;
