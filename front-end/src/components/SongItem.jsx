import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ id, image, name, duration, index }) => {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>
        <div className="song-item__album">
          <img
            className="song-item__image"
            src={image}
            alt={`Imagem da Música ${name}`}
          ></img>

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p className="song-item__duration">{duration}</p>
    </Link>
  );
};

export default SongItem;
