import React from "react";
import Item from "./item";

function Items(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((item, index) => {
        return <Item key={index} itemValue={item} />;
      })}
    </ul>
  );
}
export default Items;
