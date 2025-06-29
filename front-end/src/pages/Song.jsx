import React from "react";
import Player from "../components/Player.jsx";
import { Link, useParams } from "react-router-dom";
import { songsArray } from "../assets/database/songs.js";
import { artistArray } from "../assets/database/artists.js";

const Song = () => {
  const { id } = useParams();
  const songToPlay = songsArray.filter((song) => song.id === id)[0];
  const artistObj = artistArray.filter(
    (artist) => artist.name === songToPlay.artist
  )[0];

  const songsOfArtist = songsArray.filter(
    (song) => song.artist === songToPlay.artist
  );

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img
            src={songToPlay.image}
            alt={`Imagem da Música ${songToPlay.name}`}
          ></img>
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src="https://i.scdn.co/image/ab67616100005174fde13b4ff04ee1c0f33c6878"
            alt={`Imagem do Artista ${songToPlay.artist}"`}
          />
        </Link>
        <Player {...songToPlay} songsOfArtist={songsOfArtist} />
        <div>
          <p className="song__name">{songToPlay.name}</p>
          <p>{songToPlay.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
