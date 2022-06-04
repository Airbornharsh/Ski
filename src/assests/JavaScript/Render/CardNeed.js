import React from "react";

const CardNeed = (props) => {
  return (
    <div>
      <h3>{props.needed ? props.needed.toUpperCase() : ""}</h3>
      <ul>
        {props.data[props.needed]
          ? props.data[props.needed].map((element) => {
              return (
                <li key={element}>
                  <p>{element}</p>
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};

export default CardNeed;
