import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar imgUrl={props.imgUrl} alt={props.alt} />
      </div>
      <div className="bottom">
        <Detail info={props.telephone} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}
export default Card;
