import React from "react";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleItem = ({ id, image, name, banner, artist, idPath }) => {
  {
    // console.log(`SingleItem: ${JSON.stringify(id)}`);
    // console.log(`SingleItem: ${id}, ${name}, ${image}, ${banner}, ${artist}`);
    //console.log("Single item de idpath=:  " + idPath);
  }

  return (
    <Link to={`/${idPath}/${id}`} className="single-item">
      <div className="single-item__div-image-button">
        <div className="single-item__div-image">
          <img
            className="single-item__image"
            src={image}
            alt={`Imagem do Artista ${name}`}
          ></img>
        </div>
        <FontAwesomeIcon className="single-item__icon" icon={faCirclePlay} />
      </div>
      <div className="single-item__texts">
        <div className="single-item__2lines">
          <p className="single-item__title">{name}</p>
        </div>
        <p className="single-item__type">{artist ?? "Artista"}</p>
      </div>
    </Link>
  );
};

export default SingleItem;
