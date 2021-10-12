import { Dialog, DialogTitle, Button } from "@material-ui/core";
import MiniPalette from "./MiniPalette";
import useStyles from "../styles/PaletteListStyles";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useState } from "react";
import { Clear, DeleteOutline } from "@material-ui/icons";
import { useContext } from "react";
import { PaletteContext } from "../contexts/PaletteContext";

const PaletteList = ({ palettes }: PaletteList) => {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [paletteIdToDelete, setPaletteIdToDelete] = useState("");

  const { changePalettes } = useContext(PaletteContext);

  const showDialog = (pid: string) => {
    setPaletteIdToDelete(pid);
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const deletePalette = () => {
    const newPalettes = palettes.filter((p) => p.id !== paletteIdToDelete);
    changePalettes(newPalettes);
    setIsDialogOpen(false);
  };

  const palettesNames = palettes.map((palette) => {
    return (
      <CSSTransition key={palette.id} classNames="fade" timeout={400}>
        <MiniPalette
          key={palette.id}
          palette={palette}
          showDialog={showDialog}
        />
      </CSSTransition>
    );
  });

  return (
    <>
      <TransitionGroup className={classes.PaletteList}>
        {palettesNames}
      </TransitionGroup>
      <Dialog open={isDialogOpen} onClose={handleClose}>
        <DialogTitle>
          $
          {`Are you sure you want to delete ${paletteIdToDelete
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")} ?`}{" "}
        </DialogTitle>
        <div className={classes.buttonContainer}>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<Clear />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<DeleteOutline />}
            onClick={deletePalette}
          >
            Delete
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default PaletteList;
