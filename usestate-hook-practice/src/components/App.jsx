import React, { useState } from "react";

function getCurrentTime() {
  return new Date().toLocaleTimeString();
}
function App() {
  const [currentTime, getTime] = useState(getCurrentTime());

  function onSetTime() {
    getTime(getCurrentTime());
  }

  setInterval(onSetTime, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={onSetTime}>Get Time</button>
    </div>
  );
}

export default App;
