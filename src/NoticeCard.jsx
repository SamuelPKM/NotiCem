import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";
import { getNews } from "./Firebase/Providers";
import { useState, useEffect } from "react";
import { Comment } from "./Comment";

//Esqueleto para mapear las noticias
export const NoticeCard = () => {
  const [newsData, setNewsData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("")
  const [dialogMessage, setDialogMessage] = useState("")
  const [newID, setNewID] = useState("")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews();
        setNewsData(data);
      } catch (error) {
        console.error("Error al obtener noticias:", error);
      }
    };

    fetchData();
  }, []);

  const handleCommentClick = (id, Titulo, Email) => {
    setDialogMessage(Email)
    setDialogTitle(Titulo)
    setNewID(id)
    setOpenDialog(true)
  };

  const handleShowCommentsClick = () => {
    
  };
  return (
    <Stack direction={"row"} spacing={2} useFlexGap flexWrap="wrap">
      {newsData.map((news) => (
        <Card key={news.id} sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              news.data.Link ||
              "https://static.vecteezy.com/system/resources/previews/001/234/420/non_2x/breaking-news-on-mesh-background-vector.jpg"
            }
            title={news.data.Titulo || "Sin título"}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {news.data.Titulo || "Sin título"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.data.Contenido || "Sin contenido"}
            </Typography>
            <br />
            <Typography gutterBottom variant="body3">
              {news.data.Email || "Sin Email"}
            </Typography>
            <br />
            <Typography gutterBottom variant="body3">
              {news.data.Nombre || "Sin título"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() =>
                handleCommentClick(news.id, news.data.Titulo, news.data.Email)
              }
            >
              Comentar
            </Button>
            <Button
              size="small"
              onClick={() => handleShowCommentsClick(news.id)}
            >
              Ver Comentarios
            </Button>
          </CardActions>
        </Card>
      ))}
        {openDialog && (
        <Comment
          open={openDialog}
          set={setOpenDialog}
          dialogTitle={dialogTitle}
          dialogMessage={dialogMessage}
          id={newID}
          okButtonMessage="Enviar"
        />
      )}
    </Stack>
  );
};
