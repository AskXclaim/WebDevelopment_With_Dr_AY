import React from "react";

function Avatar(props) {
  return <img className="circle-img" src={props.imgUrl} alt={props.alt} />;
}

export default Avatar;
