import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "../styles/NewPaletteFormStyles";
import { ChromePicker, ColorResult } from "react-color";
import { Button } from "@material-ui/core";
import { Add, Shuffle } from "@material-ui/icons";
import chroma from "chroma-js";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { PaletteContext } from "../contexts/PaletteContext";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";

const NewPaletteFormNav = ({
  open,
  classes,
  handleDrawerOpen,
  savePalette,
}: NewPaletteFormNavProps) => {
  const [paletteName, setPaletteName] = useState("");

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPaletteName(evt.target.value);
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        color="default"
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuOpenIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Add New Colors
          </Typography>
          <ValidatorForm onSubmit={() => savePalette(paletteName)}>
            <TextValidator
              name="paletteNameForm"
              value={paletteName}
              onChange={handleChange}
              validators={["required"]}
              errorMessages={["Palette name is required"]}
            />
            <Button
              className={classes.buttons}
              variant="contained"
              color="primary"
              type="submit"
            >
              Save Palette
            </Button>
          </ValidatorForm>

          <Link href="/" passHref>
            <Button
              className={classes.buttons}
              variant="contained"
              color="secondary"
            >
              Go Back
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NewPaletteFormNav;
