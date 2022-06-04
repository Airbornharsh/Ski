import React from "react";

const CardLinks = (props) => {
  return (
    <div>
      <h3>{props.linkParent.toUpperCase()}</h3>
      <ul>
        {props.data[props.linkParent]
          ? props.data[props.linkParent].map((element) => {
              return (
                <li key={element.header}>
                  <a href={element.link}>{element.header}</a>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default CardLinks;
