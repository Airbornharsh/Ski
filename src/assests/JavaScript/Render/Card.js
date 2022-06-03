import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src={props.data.url} />
      </div>
      <h2>{props.data.realName}</h2>
      <p>{props.data.description}</p>
      <button
        onClick={() => {
          props.onReadMore(props.data, "flex");
        }}
        className="read-more"
      >
        MORE
      </button>
    </div>
  );
};

export default Card;
