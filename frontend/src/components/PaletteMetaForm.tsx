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

const PaletteMetaForm = ({ savePalette, classes }: PaletteMetaFormProps) => {
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPaletteName(evt.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={() => savePalette(paletteName)}>
            <TextValidator
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
            <Button
              className={classes.navButtons}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save Palette
            </Button>
          </ValidatorForm>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default PaletteMetaForm;
