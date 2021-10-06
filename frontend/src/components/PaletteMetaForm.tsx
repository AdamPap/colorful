import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useState, useEffect, useContext, ChangeEvent } from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PaletteContext } from "../contexts/PaletteContext";

const PaletteMetaForm = ({
  savePalette,
  classes,
  isFormOpen,
  hideForm,
}: PaletteMetaFormProps) => {
  const [paletteName, setPaletteName] = useState("");
  const { palettes } = useContext(PaletteContext);

  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      if (
        palettes.some(
          ({ paletteName }) => paletteName.toLowerCase() === value.toLowerCase()
        )
      )
        return false;
      return true;
    });
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPaletteName(evt.target.value);
  };

  return (
    <Dialog
      open={isFormOpen}
      onClose={hideForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add New Palette</DialogTitle>
      <ValidatorForm onSubmit={() => savePalette(paletteName)}>
        <DialogContent>
          <DialogContentText>
            Please enter a unique for your new palette! Make sure it&apos;s
            unique
          </DialogContentText>

          <TextValidator
            fullWidth
            margin="normal"
            placeholder="Palette Name"
            name="paletteNameForm"
            value={paletteName}
            onChange={handleChange}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={[
              "Palette name is required",
              "Palette name must be unique",
            ]}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={hideForm} color="primary">
            Cancel
          </Button>
          <Button
            className={classes.navButtons}
            variant="contained"
            color="primary"
            type="submit"
          >
            Save Palette
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  );
};

export default PaletteMetaForm;
