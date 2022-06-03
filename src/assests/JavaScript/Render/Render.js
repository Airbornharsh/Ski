import React, { useState } from "react";
import category from "../Data/category.js";
import Card from "./Card.js";
import CardExpand from "./CardExpand.js";

import "./Render.css";

const Render = (props) => {
  const searchRenderObjects = [];
  const [cardExpandData, setCardExpandData] = useState("");
  // const [displayInfo, setDisplayInfo] = useState("");

  const check = (data1, data2) => {
    for (let i = 0; i < data1.length + 1; i++) {
      for (let j = 0; j < data1.length; j++) {
        if (data2 === data1.substring(i, j)) {
          return true;
        }
      }
    }
    return false;
  };

  const checkExisted = (item) => {
    searchRenderObjects.forEach((element) => {
      if (element.name === item) {
        return true;
      }
    });
    return false;
  };

  for (const key in category) {
    for (const newKey in category[key]) {
      if (
        check(category[key][newKey].name, props.searched) &&
        (key === props.filtered || "all" === props.filtered)
      ) {
        if (!checkExisted(category[key][newKey].name)) {
          searchRenderObjects.push(category[key][newKey]);
        }
      }
    }
  }

  const readMore = (data, display) => {
    const cardExpand = document.getElementById("card-expand");
    cardExpand.style.display = display;
    setCardExpandData(data);
    // setDisplayInfo(display);
  };

  const closeReadMore = (display) => {
    const cardExpand = document.getElementById("card-expand");
    cardExpand.style.display = display;
    // setDisplayInfo(display);
  };

  return (
    <div id="render-container">
      {searchRenderObjects.map((searchRenderObject) => (
        <Card
          key={searchRenderObject.name}
          data={searchRenderObject}
          onReadMore={readMore}
        />
      ))}
      {<CardExpand data={cardExpandData} onCloseReadMore={closeReadMore} />}
    </div>
  );
};

export default Render;
