import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const adjustState = (prevState, name, value) => {
    const newState = { ...prevState };
    newState[name] = value;
    return newState;
  };

  function handleOnChange(event) {
    const { name, value } = event.target;

    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
      // switch (name) {
      //   case "fName":
      //     return adjustState(prevState, name, value);
      //   case "lName":
      //     return adjustState(prevState, name, value);
      //   case "email":
      //     return adjustState(prevState, name, value);
      //   default:
      //     break;
      // }
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleOnChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleOnChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
