import { FirebaseDB } from "./Config";

import { doc, setDoc, collection } from "firebase/firestore";

export const uploadData = async ({
  Email,
  Nombre,
  Contenido,
  Link = "https://static.vecteezy.com/system/resources/previews/001/234/420/non_2x/breaking-news-on-mesh-background-vector.jpg",
}) => {
  const DocRef = collection(FirebaseDB, "News");
  await setDoc(doc(DocRef), {
    Email: Email,
    Contenido: Contenido,
    Nombre: Nombre,
    Fecha: Date.now(),
    Link: Link,
  });
};
