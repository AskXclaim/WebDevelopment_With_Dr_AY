import React, { useState } from "react";

function App() {
  const [className, setButtonStyle] = useState("button-mouseOut");
  const [name, setName] = useState("");
  const [greetingName, setgreetingName] = useState("");

  function handleOnMouseOut() {
    setButtonStyle("button-mouseOut");
  }

  function handleOnMouseOver() {
    setButtonStyle("button-mouseOver");
  }

  function handleOnChange(event) {
    setName(event.target.value);
  }

  function handleOnClick() {
    setgreetingName(name);
  }

  return (
    <div className="container">
      <h1>Hello {greetingName}</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        className={className}
        onMouseOut={handleOnMouseOut}
        onMouseOver={handleOnMouseOver}
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
