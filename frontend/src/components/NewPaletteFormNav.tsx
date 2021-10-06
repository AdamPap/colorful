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

const NewPaletteFormNav = ({
  open,
  classes,
  handleDrawerOpen,
  savePalette,
}: NewPaletteFormNavProps) => {
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
              <PaletteMetaForm savePalette={savePalette} classes={classes} />
              <Link href="/" passHref>
                <Button
                  className={classes.buttons}
                  variant="contained"
                  color="secondary"
                >
                  Go Back
                </Button>
              </Link>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NewPaletteFormNav;
