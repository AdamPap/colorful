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
import { Picker, BaseEmoji } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { ChevronRight } from "@material-ui/icons";
import { Stages } from "../enums/StagesEnum";

const PaletteMetaForm = ({
  savePalette,
  classes,
  stage,
  moveToEmojiStage,
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

  const save = (emoji: BaseEmoji) => {
    console.log(emoji);
    savePalette(paletteName, emoji.native);
  };

  return (
    <>
      <Dialog open={stage === Stages.Emoji} onClose={hideForm}>
        <Picker onSelect={save} />
      </Dialog>
      <Dialog
        open={stage === Stages.PaletteName}
        onClose={hideForm}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle style={{ paddingBottom: 0 }} id="form-dialog-title">
          Choose a Palette Name
        </DialogTitle>
        <ValidatorForm onSubmit={moveToEmojiStage}>
          <DialogContent>
            {/* <DialogContentText>
              Please enter a unique for your new palette! Make sure it&apos;s
              unique
            </DialogContentText> */}
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
              endIcon={<ChevronRight />}
            >
              Next
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
};

export default PaletteMetaForm;
