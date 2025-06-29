import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistfile) => {
  const newArtistObj = { ...currentArtistfile };
  delete newArtistObj.id;

  return newArtistObj;
});
//console.log(newArtistArray);
console.log("Artistas carregados com sucesso!");

const newSongArray = songsArray.map((currentSongfile) => {
  const newSongObj = { ...currentSongfile };
  delete newSongObj.id;

  return newSongObj;
});
//console.log(newSongArray);
console.log("Músicas carregadas com sucesso!");

const SongsResponse = await db.collection("songs").insertMany(newSongArray);
console.log(
  `Músicas inseridas com sucesso! ${SongsResponse.insertedCount} músicas inseridas.`
);

const ArtistsResponse = await db
  .collection("artists")
  .insertMany(newArtistArray);
console.log(
  `Artistas inseridos com sucesso! ${ArtistsResponse.insertedCount} artistas inseridos.`
);
