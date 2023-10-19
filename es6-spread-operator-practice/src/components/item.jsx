import React, { useState } from "react";

function Item(props) {
  const [style, setClassName] = useState({});
  const [isStrikedThrough, setIsStrikedThrough] = useState(false);

  function handleOnClick() {
    const styleToUse = isStrikedThrough
      ? { textDecoration: "line-through" }
      : { textDecoration: "none" };
    setClassName(styleToUse);
    setIsStrikedThrough(!isStrikedThrough);
  }

  return (
    <li style={style} onClick={handleOnClick}>
      {props.itemValue}
    </li>
  );
}

export default Item;
