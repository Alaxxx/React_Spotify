import React from "react";
import ItemList from "./ItemList.jsx";
import { artistArray } from "../assets/database/artists.js";
import { songsArray } from "../assets/database/songs.js";

const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas Populares"
          items={5}
          itemsArray={artistArray}
          path="/artists"
          idPath="artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Músicas Populares"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};
export default Main;
