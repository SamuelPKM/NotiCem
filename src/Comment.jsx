import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { uploadComments } from "./Firebase/Providers";
import { uploadResp } from "./Firebase/Providers";

export const Comment = ({
  open,
  set,
  dialogTitle,
  dialogMessage,
  id,
  okButtonMessage,
}) => {
  const [values, setValues] = useState({
    RespEmail: "",
    Contenido: "",
    RespNombre: "",
    id: id,
  });

  const handleChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (okButtonMessage === "Responder") {
      await uploadResp(values);
    } else {
      await uploadComments(values);
    }

    set(false);
  };

  return (
    <Dialog open={open} keepMounted disableEscapeKeyDown>
      <DialogTitle align="center">
        {`${okButtonMessage} a ${dialogTitle}`}
      </DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          <Typography variant="body2">
            {` Vas a ${okButtonMessage} a ${dialogMessage}`}
          </Typography>
        </DialogContentText>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          name="RespEmail"
          fullWidth
          value={values.RespEmail}
          onChange={handleChange}
        />
        <TextField
          label="Nombre"
          variant="outlined"
          margin="normal"
          name="RespNombre"
          fullWidth
          value={values.RespNombre}
          onChange={handleChange}
        />
        <TextField
          label="Contenido"
          variant="outlined"
          margin="normal"
          multiline
          fullWidth
          rows={4}
          name="Contenido"
          value={values.Contenido}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSubmit} variant="contained">
          {okButtonMessage}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
