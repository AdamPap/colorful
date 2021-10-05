import { ChangeEvent, useEffect, useRef, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { Button } from "@material-ui/core";
import { Add, NotInterested, Shuffle } from "@material-ui/icons";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

const ColorPickerForm = ({
  currentColor,
  colors,
  maxColors,
  updateCurrentColor,
  addNewColor,
}: ColorPickerFormProps) => {
  const isPaletteFull = colors.length >= maxColors;

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
      <div style={{ marginBottom: "24px" }}>
        <ChromePicker
          color={currentColor.hex}
          onChangeComplete={updateCurrentColor}
        />
      </div>
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          placeholder="Color Name"
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
          // color="primary"
          style={{
            marginTop: "8px",
            width: "100%",
            backgroundColor: isPaletteFull ? "gray" : currentColor.hex,
            color: "white",
          }}
          startIcon={isPaletteFull ? <NotInterested /> : <Add />}
          disabled={isPaletteFull}
          type="submit"
        >
          {isPaletteFull ? "Palette Full" : "Add Color"}
        </Button>
      </ValidatorForm>
    </>
  );
};

export default ColorPickerForm;
