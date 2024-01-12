import { TextField, Button, Box } from "@mui/material";
import { useState } from "react";

export const WriteNotice = () => {
  const [values, setValues] = useState({
    Email: "",
    Contenido: "",
    Fecha: "",
    Nombre: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <Box component={"form"}>
      <TextField
        label="Campo 1"
        variant="outlined"
        margin="normal"
        name="Email"
        value={values.Email}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Campo 4"
        variant="outlined"
        margin="normal"
        name="Nombre"
        value={values.Nombre}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Campo 2"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
        name="Contenido"
        value={values.Contenido}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Campo 3"
        variant="outlined"
        margin="normal"
        name="Fecha"
        value={values.Fecha}
        onChange={handleChange}
      />
      <br />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Enviar
      </Button>
    </Box>
  );
};
