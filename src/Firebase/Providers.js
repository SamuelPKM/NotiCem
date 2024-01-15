import { FirebaseDB } from "./Config";

import {
  doc,
  setDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

export const uploadNews = async ({
  Email,
  Nombre,
  Contenido,
  Link,
  Titulo,
}) => {
  const DocRef = collection(FirebaseDB, "News");
  await setDoc(doc(DocRef), {
    Email: Email,
    Contenido: Contenido,
    Nombre: Nombre,
    Fecha: Date.now(),
    Titulo: Titulo,
    Link: Link,
  });
};

export const getNews = async () => {
  try {
    const querySnapshot = await getDocs(collection(FirebaseDB, "News"));
    const newsArray = [];

    querySnapshot.forEach((doc) => {
      newsArray.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return newsArray;
  } catch (error) {
    console.error("Error al obtener noticias:", error);
  }
};

export const uploadComments = async ({
  id,
  RespEmail,
  Contenido,
  RespNombre,
}) => {
  const docRef = collection(FirebaseDB, "Comments");
  await setDoc(doc(docRef), {
    Email: RespEmail,
    Contenido: Contenido,
    Nombre: RespNombre,
    id: id,
    Fecha: Date.now(),
  });
};

export const getComments = async (id) => {
  try {
    const q = query(
      collection(FirebaseDB, "Comments"),
      where("id", "==", id)
    );

    const querySnapshot = await getDocs(q);

    const commentsArray = [];

    querySnapshot.forEach((doc) => {
      commentsArray.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return commentsArray;
  } catch (error) {
    console.error("Error al obtener noticias:", error);
  }
};

export const uploadResp = async ({
  id,
  RespEmail,
  Contenido,
  RespNombre,
}) => {
  const docRef = collection(FirebaseDB, "Reply");
  await setDoc(doc(docRef), {
    Email: RespEmail,
    Contenido: Contenido,
    Nombre: RespNombre,
    id: id,
    Fecha: Date.now(),
  });
};

export const getResp = async (id) => {
  try {
    const querySnapshot = await getDocs(
      collection(FirebaseDB, "Reply"),
      where("id", "==", id)
    );
    const commentsArray = [];

    querySnapshot.forEach((doc) => {
      commentsArray.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    return commentsArray;
  } catch (error) {
    console.error("Error al obtener respuestas:", error);
  }
};

