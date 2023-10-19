import React from "react";

function Input(props) {
  return (
    <input
      type={props.type}
      value={props.textValue}
      onChange={(event) => {
        props.onChange(event);
      }}
    />
  );
}

export default Input;
