import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function CreateArea(props) {
  const [note, setCreateArea] = useState({ title: "", content: "", id: "" });

  function handleOnChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setCreateArea((prevCreateArea) => {
        return { ...prevCreateArea, [name]: value };
      });
    }
    if (name === "content") {
      setCreateArea((prevCreateArea) => {
        return { ...prevCreateArea, [name]: value };
      });
    }
  }

  function handleOnSubmit(event) {
    props.addNote({ ...note, id: uuid() });
    setCreateArea({ title: "", content: "", id: "" });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleOnChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleOnChange}
        />
        <button onClick={handleOnSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
