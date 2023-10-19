import React, { useState } from "react";
import Input from "./Input";

function AddItemForm(props) {
  const [textValue, setTextValue] = useState("");

  function handleOnChange(event) {
    const { value } = event.target;
    setTextValue(value);
  }

  return (
    <React.Fragment>
      <Input onChange={handleOnChange} type="text" textValue={textValue} />
      <button
        onClick={() => {
          props.addBtnOnclick(textValue);
          setTextValue("");
        }}
      >
        <span>Add</span>
      </button>
    </React.Fragment>
  );
}
export default AddItemForm;
