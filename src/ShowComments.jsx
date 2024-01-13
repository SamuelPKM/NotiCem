import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ShowComments = ({ open, handleClose, dialogTitle, dialogMessage, okButtonMessage }) => {
  return (
    <Dialog open={open} TransitionComponent={Transition} keepMounted disableEscapeKeyDown>
      <DialogTitle align="center">{dialogTitle}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Typography variant="h6">{dialogMessage}</Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="pdGreen" variant="contained" type="submit">
          {okButtonMessage}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

GenericDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  dialogTitle: PropTypes.string.isRequired,
  dialogMessage: PropTypes.string.isRequired,
  okButtonMessage: PropTypes.string.isRequired,
};
