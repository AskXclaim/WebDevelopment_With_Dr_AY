import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((entry, index) => {
          return (
            <Entry
              key={entry.id}
              name={entry.name}
              emoji={entry.emoji}
              meaning={entry.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
