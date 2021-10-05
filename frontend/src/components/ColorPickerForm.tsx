import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { Button } from "@material-ui/core";
import { Add, Shuffle } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPickerForm = ({
  currentColor,
  colors,
  updateCurrentColor,
  addNewColor,
}: ColorPickerFormProps) => {
  const [colorName, setColorName] = useState("");

  useEffect(() => {
    ValidatorForm.addValidationRule("colorNameExists", (value) => {
      if (colors.some(({ name }) => name.toLowerCase() === value.toLowerCase()))
        return false;
      return true;
    });

    ValidatorForm.addValidationRule("colorExists", (value) => {
      if (colors.some(({ color }) => color === currentColor.hex)) return false;
      return true;
    });
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setColorName(evt.target.value);
  };

  const handleSubmit = () => {
    addNewColor(colorName);
    setColorName("");
  };

  return (
    <>
      <ChromePicker
        color={currentColor.hex}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          name="colorName"
          value={colorName}
          onChange={handleChange}
          validators={["required", "colorNameExists", "colorExists"]}
          errorMessages={[
            "Color name is required",
            "Color name already exists",
            "Color already exists",
          ]}
          // TODO: fix color already exists appearing after adding a color
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: currentColor.hex }}
          startIcon={<Add />}
          type="submit"
        >
          Add Color
        </Button>
      </ValidatorForm>
    </>
  );
};

export default ColorPickerForm;
