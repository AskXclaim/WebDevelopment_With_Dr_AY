import React from "react";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="password" placeholder="Password" />
      {!props.userIsRegistered && (
        <Input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">
        {props.userIsRegistered ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
