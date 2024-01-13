import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Stack,
  Dialog,
} from "@mui/material";
import { useState, useEffect } from "react";
import { getComments } from "./Firebase/Providers";

export const ShowComments = ({ open, handleClose, id }) => {
  const [commentsData, setCommentsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComments(id);
        setCommentsData(data);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Dialog open={open} keepMounted disableEscapeKeyDown sx={{p:5}}>
      <Stack direction={"column"} spacing={2} useFlexGap flexWrap="wrap">
        {commentsData.map((comments) => (
          <Card key={comments.id} sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {comments.data.Contenido || "Sin contenido"}
              </Typography>
              <br />
              <Typography gutterBottom variant="body3">
                {comments.data.RespEmail || "Sin Email"}
              </Typography>
              <br />
              <Typography gutterBottom variant="body3">
                {comments.data.RespNombre || "Sin nombre"}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleClose(false)} disabled>
                Responder
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
      <br />
      <Button size="small" variant="contained" onClick={() => handleClose(false)} sx={{}}>
        Cerrar
      </Button>
    </Dialog>
  );
};
