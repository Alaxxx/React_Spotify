import React from "react";
import {
  faCirclePlay,
  faCirclePause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Player = ({ id, name, duration, songsOfArtist, audio }) => {
  //verifi if id-1 exiists in songsOfArtist
  const previousSongExists =
    id - 1 >= 0 && songsOfArtist.some((p) => p.id == id - 1) ? id - 1 : id;
  const nextSongExists =
    id + 1 >= songsOfArtist.length && songsOfArtist.some((p) => p.id == id + 1)
      ? id + 1
      : id;

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const [isPlaying, setIsPlaying] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState("00:00");
  const [currentProgressValue, setCurrentProgressValue] = React.useState(0);
  const progressBarRef = useRef(null);
  const audioPlayerRef = useRef(null);
  let contadorTeste = 0;
  const togglePlayPause = () => {
    isPlaying ? audioPlayerRef.current.pause() : audioPlayerRef.current.play();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        setCurrentTime(formatTime(audioPlayerRef.current.currentTime));
        setCurrentProgressValue(
          (audioPlayerRef.current.currentTime /
            audioPlayerRef.current.duration) *
            100
        );

        //testando se eu consigo mexer no html via script sem variavel de estado
        //document.querySelector(".song__name").innerHTML = contadorTeste++;

        // progressBarRef.current.style.setProperty(
        //   "--_progress",
        //   `${
        //     (audioPlayerRef.current.currentTime /
        //       audioPlayerRef.current.duration) *
        //     100
        //   }%`
        // );
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${previousSongExists}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackward} />
        </Link>
        <FontAwesomeIcon
          className="player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => togglePlayPause()}
        />
        <Link to={`/song/${nextSongExists}`}>
          <FontAwesomeIcon className="player__icon" icon={faForward} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          <div
            ref={progressBarRef}
            className="player__bar-progress"
            style={{ "--_progress": `${currentProgressValue}%` }}
          ></div>
        </div>
        <p>{duration}</p>
        {/* <p> {currentProgressValue + "%"}</p> */}
      </div>
      <audio ref={audioPlayerRef} src={audio}></audio>
    </div>
  );
};

export default Player;
