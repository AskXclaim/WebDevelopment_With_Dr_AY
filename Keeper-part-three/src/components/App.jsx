import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function handleOnClick(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function handleDeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((pn) => {
        return pn.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleOnClick} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            title={noteItem.title}
            content={noteItem.content}
            id={noteItem.id}
            onDelete={handleDeleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
