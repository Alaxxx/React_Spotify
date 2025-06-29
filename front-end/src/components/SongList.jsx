import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songArtistList }) => {
  const [maxItems, setMaxItems] = React.useState(5);
  return (
    <div className="song-list">
      {/* {songArtistList.forEach((artist, index) => {
        <SongItem {...artist} />;
        <teste>{index}</teste>;
      })} */}

      {songArtistList
        .filter((curr, index) => index < maxItems)
        .map((song, index) => (
          <SongItem {...song} key={index} index={index} />
        ))}

      <p
        className="song-list__see-more"
        onClick={() => {
          console.log(setMaxItems(5 + maxItems));
        }}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
