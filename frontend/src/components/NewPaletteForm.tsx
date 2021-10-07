import { createRef, useContext, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import useStyles from "../styles/NewPaletteFormStyles";
import { ColorResult } from "react-color";
import { Button } from "@material-ui/core";
import { Shuffle } from "@material-ui/icons";
import chroma from "chroma-js";
import { PaletteContext } from "../contexts/PaletteContext";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import DraggableColorList from "./DraggableColorList";
import { arrayMove } from "react-sortable-hoc";
import NewPaletteFormNav from "./NewPaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";

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

const maxColors = 20;

const NewPaletteForm = () => {
  const router = useRouter();

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [colors, setColors] = useState([] as Color[]);
  const [colorNameToDelete, setColorNameToDelete] = useState("");
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  const { palettes, changePalettes } = useContext(PaletteContext);

  const isPaletteFull = colors.length >= maxColors;

  // const colorNameInput = useRef<HTMLInputElement>(null);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // this useEffect fires only on state updates and not
  // on initial render
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    enqueueSnackbar(`${colorNameToDelete} deleted!`, {
      autoHideDuration: 1500,
      onClose: handleSnackbarClose,
    });
  }, [colorNameToDelete, enqueueSnackbar]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateCurrentColor = (newColor: ColorResult) => {
    setCurrentColor(newColor);
  };

  const addNewColor = (colorName: string) => {
    const newColor = {
      color: currentColor.hex,
      name: colorName,
    };
    setColors([...colors, newColor]);
  };

  const clearPalette = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map((palette) => palette.colors).flat();
    let color: Color;
    do {
      let rand = Math.floor(Math.random() * allColors.length);
      color = allColors[rand];
    } while (colors.some((c) => c === color));
    setColors([...colors, color]);
  };

  // TODO:  fix this to generate color without adding. Figure
  //        out how to use the ref  (undefined)
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
    // inputFocus();
  };

  // const inputFocus = () => {
  //   if (colorNameInput && colorNameInput.current) {
  //     colorNameInput.current.focus();
  //   }
  // };

  const savePalette = (newPaletteName: string, emoji: string): void => {
    const newPalette: Palette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().split(" ").join("-"),
      colors: colors,
      emoji: emoji,
    };
    changePalettes([...palettes, newPalette]);

    router.push("/");
  };

  const deleteColor = (colorName: string) => {
    setColors(colors.filter((color) => color.name !== colorName));
    setColorNameToDelete(colorName);
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const onSortEnd = ({
    oldIndex,
    newIndex,
  }: {
    oldIndex: number;
    newIndex: number;
  }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  return (
    <div className={classes.root}>
      <NewPaletteFormNav
        open={open}
        classes={classes}
        handleDrawerOpen={handleDrawerOpen}
        savePalette={savePalette}
      />
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
        <div className={classes.drawerContainer}>
          <Typography variant="h4">Design Your Palette</Typography>
          <div className={classes.drawerButtons}>
            <Button
              size="small"
              variant="outlined"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={clearPalette}
            >
              Clear Palette
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="primary"
              startIcon={<Shuffle />}
              // onClick={changeToRandomColor}
              onClick={addRandomColor}
              disabled={isPaletteFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            addNewColor={addNewColor}
            currentColor={currentColor}
            updateCurrentColor={updateCurrentColor}
            colors={colors}
            maxColors={maxColors}
            // colorNameInput={colorNameInput}
          />
        </div>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <DraggableColorList
          axis="xy"
          onSortEnd={onSortEnd}
          colors={colors}
          deleteColor={deleteColor}
          distance={1}
        />
      </main>
    </div>
  );
};

export default NewPaletteForm;
