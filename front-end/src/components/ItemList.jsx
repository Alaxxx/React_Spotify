import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const maxItems = isHome ? items : Infinity;
  console.log("pagina Main mostrando ItemList" + path);
  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title}</h2>

        {isHome ? (
          <Link className="item-list__link" to={path}>
            Mostrar tudo
          </Link>
        ) : (
          <> </>
        )}
      </div>
      <div className="item-list__container">
        {/* {console.log(JSON.stringify(itemsArray))} */}

        {itemsArray
          .filter((currentValue, index) => index < maxItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
