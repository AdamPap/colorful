import clsx from "clsx";
import Link from "next/link";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Button } from "@material-ui/core";
import PaletteMetaForm from "./PaletteMetaForm";
import { useState } from "react";
import { Stages } from "../enums/StagesEnum";

const NewPaletteFormNav = ({
  open,
  classes,
  handleDrawerOpen,
  savePalette,
}: NewPaletteFormNavProps) => {
  const [stage, setStage] = useState(Stages.None);

  const showForm = () => {
    setStage(Stages.PaletteName);
  };

  const hideForm = () => {
    setStage(Stages.None);
  };

  const moveToEmojiStage = () => {
    setStage(Stages.Emoji);
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
          <div className={classes.toolbarWrapper}>
            <Typography variant="h6" noWrap>
              Add New Colors
            </Typography>
            <div className={classes.formWrapper}>
              <Link href="/" passHref>
                <Button
                  className={classes.navButtons}
                  variant="contained"
                  color="secondary"
                >
                  Go Back
                </Button>
              </Link>
              <Button
                className={classes.navButtons}
                variant="contained"
                color="primary"
                onClick={showForm}
              >
                Save Palette
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>

      <PaletteMetaForm
        savePalette={savePalette}
        classes={classes}
        hideForm={hideForm}
        stage={stage}
        moveToEmojiStage={moveToEmojiStage}
      />
    </>
  );
};

export default NewPaletteFormNav;
