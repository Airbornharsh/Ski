import React from "react";
import CardNeed from "./CardNeed";

const CardExpand = (props) => {
  return (
    <div id="card-expand">
      <div className="container1">
        <img alt="" src={props.data.url} />
        <h2>{props.data.realName}</h2>
        <p>{props.data.description}</p>
      </div>
      <div className="container2">
        {props.data.need
          ? props.data.need.map((element) => {
              return (
                <CardNeed key={element} needed={element} data={props.data} />
              );
            })
          : 0}
      </div>
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
