import { TextField, Button, Box, Typography } from "@mui/material";
import { useState } from "react";
import { uploadNews } from "./Firebase/Providers";

export const WriteNew = () => {
  const [values, setValues] = useState({
    Email: "",
    Contenido: "",
    Fecha: "",
    Titulo: "",
    Nombre: "",
    Link: "https://static.vecteezy.com/system/resources/previews/001/234/420/non_2x/breaking-news-on-mesh-background-vector.jpg",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadNews(values);
  };

  return (
    <Box
      component={"form"}
      sx={{
        margin: 2,
        border: "2px solid black",
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "400px"
      }}
    >
      <Typography variant="h4">Subir una noticia</Typography>
      <TextField
        label="Tu email"
        variant="outlined"
        margin="normal"
        name="Email"
        fullWidth
        value={values.Email}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Tu nombre"
        variant="outlined"
        margin="normal"
        name="Nombre"
        fullWidth
        value={values.Nombre}
        onChange={handleChange}
      />
      <br />
      <TextField
        label="Titulo de la noticia"
        variant="outlined"
        margin="normal"
        name="Titulo"
        fullWidth
        value={values.Titulo}
        onChange={handleChange}
      />
      <TextField
        label="Contenido de la noticia"
        variant="outlined"
        margin="normal"
        multiline
        fullWidth
        rows={4}
        name="Contenido"
        value={values.Contenido}
        onChange={handleChange}
      />
      <TextField
        label="Link de imagen"
        variant="outlined"
        margin="normal"
        name="Link"
        fullWidth
        value={values.Link}
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
