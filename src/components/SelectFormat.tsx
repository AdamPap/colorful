import { useState, ChangeEvent } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import selectFormatStyles from "../styles/SelectFormatStyles";

const useStyles = makeStyles(() => createStyles(selectFormatStyles));

const SelectFormat = () => {
  const [format, setFormat] = useState("");
  const { selectFormat } = useStyles();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setFormat(event.target.value as string);
  };

  return (
    <FormControl className={selectFormat}>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={format}
        onChange={handleChange}
      >
        <MenuItem value="hex">HEX - </MenuItem>
        <MenuItem value="rgb">RGB - </MenuItem>
        <MenuItem value="rgba">RGBA - </MenuItem>
      </Select>
      <FormHelperText>Select Color Format</FormHelperText>
    </FormControl>
  );
};

export default SelectFormat;
