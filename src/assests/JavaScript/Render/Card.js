import React from "react";
import pic from "./o.jpg";

const Card = (props) => {

  return (
    <div className="card">
      <div className="img-container">
        <img alt="" src={pic} />
      </div>
      <h2>{ props.data.name}</h2>
      <p>
        {props.data.description}
      </p>
      <button onClick={() => { props.onReadMore(props.data,"flex") }} className="read-more">MORE</button>
    </div>
  );
};

export default Card;
