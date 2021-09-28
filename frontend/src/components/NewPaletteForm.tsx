import { useState } from "react";
import clsx from "clsx";
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
import { Button, Divider } from "@material-ui/core";
import { Add, Shuffle } from "@material-ui/icons";
import DraggableColorBox from "./DraggableColorBox";
import chroma from "chroma-js";

const defaultColor = {
  hex: "#236C7F",
  hsl: {
    h: 192,
    s: 57,
    l: 32,
  },
  rgb: {
    r: 35,
    g: 108,
    b: 127,
  },
};

const NewPaletteForm = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [colors, setColors] = useState([] as string[]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {};

  const updateCurrentColor = (newColor: ColorResult) => {
    setCurrentColor(newColor);
  };

  const addNewColor = () => {
    setColors([...colors, currentColor.hex]);
  };

  const clearPalette = () => {
    setColors([]);
  };

  const changeToRandomColor = () => {
    const possibleValues = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += possibleValues[Math.floor(Math.random() * 16)];
    }
    // since chroma.js  is used:
    // color = chroma.random()

    const colorObject = {
      hex: color,
      hsl: {
        h: chroma(color).hsl()[0],
        s: chroma(color).hsl()[1],
        l: chroma(color).hsl()[2],
      },
      rgb: {
        r: chroma(color).rgb()[0],
        g: chroma(color).rgb()[1],
        b: chroma(color).rgb()[2],
      },
    };

    setCurrentColor(colorObject);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
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
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Typography variant="h4">Design Your Palette</Typography>
        <div>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<DeleteIcon />}
            onClick={clearPalette}
          >
            Clear Palette
          </Button>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<Shuffle />}
            onClick={changeToRandomColor}
          >
            Random Color
          </Button>
        </div>
        <ChromePicker
          color={currentColor.hex}
          onChangeComplete={updateCurrentColor}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: currentColor.hex }}
          startIcon={<Add />}
          onClick={addNewColor}
        >
          Add Color
        </Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div style={{ height: "100vh" }}>
          {colors.map((color) => {
            return <DraggableColorBox key={color} color={color} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default NewPaletteForm;
