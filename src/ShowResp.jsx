import { Card, CardContent, Typography, Stack, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { getResp } from "./Firebase/Providers";

export const ShowResp = ({ id, commentsId }) => {
  const [respData, setRespData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResp(commentsId);
        setRespData(data);
      } catch (error) {
        console.error("Error al obtener las respuestas:", error);
      }
    };

    fetchData();
  }, []);
  const filteredRespData = respData.filter((reply) => reply.data.id === id);
  return (
    <Stack direction={"column"} spacing={2} useFlexGap flexWrap="wrap">
      {filteredRespData.map((reply) => (
        <Card key={reply.id} sx={{ maxWidth: 345 }}>
          <CardContent>
            <Typography variant="subtitle1" >
              {reply.data.Contenido || "Sin contenido"}
            </Typography>
            <br />
            <Divider textAlign="left">
              <Typography variant="body2">Datos del autor</Typography>
              </Divider>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {reply.data.Email || "Sin Email"}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              {reply.data.Nombre || "Sin nombre"}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
};
