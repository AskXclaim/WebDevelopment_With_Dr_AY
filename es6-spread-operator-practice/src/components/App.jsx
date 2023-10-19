import React, { useState } from "react";
import Heading from "./Heading";
import Items from "./Items";
import AddItemForm from "./AddItemForm";

function App() {
  const [items, setItems] = useState([]);

  function handleOnClick(textValue) {
    setItems((prevItems) => {
      return [...prevItems, textValue];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <Heading title="To-Do List" />
      </div>
      {/* <div className="form">
        <input onChange={handleOnChange} type="text" value={itemValue} />
        <button onClick={handleOnClick}>
          <span>Add</span>
        </button>
      </div> */}
      <div className="form">
        <AddItemForm addBtnOnclick={handleOnClick} />
      </div>

      <div>
        <Items items={items} />
      </div>
    </div>
  );
}

export default App;
