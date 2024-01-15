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
import { Comment } from "./Comment";
import { ShowResp } from "./ShowResp";

export const ShowComments = ({ open, handleClose, id }) => {
  const [commentsData, setCommentsData] = useState([]);
  const [writeResp, setWriteResp] = useState(false);
  const [commentID, setCommentID] = useState("");
  const [contenido, setContenido] = useState("");
  const [nombre, setNombre] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getComments(id);
        setCommentsData(data);
      } catch (error) {
        console.error("Error al obtener los comentarios:", error);
      }
    };

    fetchData();
  }, []);

  const Reply = (id, Contenido, Nombre) => {
    setCommentID(id);
    setContenido(Contenido);
    setNombre(Nombre);
    setWriteResp(true);
  };

  return (
    <Dialog open={open} keepMounted disableEscapeKeyDown>
      <Stack
        direction={"column"}
        spacing={2}
        useFlexGap
        flexWrap="wrap"
        sx={{ p: 2 }}
      >
        {commentsData.length === 0 ? (
          <Typography variant="body" color="text.secondary">
            No hay comentarios todavía
          </Typography>
        ) : (
          commentsData.map((comments) => (
            <Card key={comments.id} sx={{ backgroundColor: "floralwhite" }}>
              <CardContent>
                <Typography variant="h6">
                  {comments.data.Contenido || "Sin contenido"}
                </Typography>
                <br />
                <br />
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {comments.data.Email || "Sin Email"}
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  {comments.data.Nombre || "Sin nombre"}
                </Typography>
                <ShowResp id={comments.id} commentsId={comments.id} />
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  key={comments.id}
                  onClick={() =>
                    Reply(
                      comments.id,
                      comments.data.Contenido,
                      comments.data.Nombre
                    )
                  }
                  variant="contained"
                >
                  Responder
                </Button>
                {writeResp && (
                  <Comment
                    open={writeResp}
                    set={setWriteResp}
                    dialogTitle={nombre}
                    dialogMessage={contenido}
                    id={commentID}
                    okButtonMessage="Responder"
                  />
                )}
              </CardActions>
            </Card>
          ))
        )}
      </Stack>
      <br />
      <Button
        size="small"
        variant="contained"
        onClick={() => handleClose(false)}
        color="error"
        sx={{ m: 2 }}
      >
        Cerrar
      </Button>
    </Dialog>
  );
};
