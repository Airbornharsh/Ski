import React from "react";

const CardExpand = (props) => {

  return (
    <div id="card-expand">
      <img alt="" src={props.data.url} />
      <h2>{props.data.name}</h2>
      <p>{props.data.description}</p>
      <div id="close-read-more">
        <button
          onClick={() => {
            props.onCloseReadMore("none");
          }}
        ></button>
      </div>
    </div>
  );
};

export default CardExpand;
