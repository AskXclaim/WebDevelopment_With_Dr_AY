"use strict";

const getInput = (textInputName) => {
  return document.querySelector(`${textInputName}`);
};

const isTextInputValid = (textInputName) => {
  const input = getInput(textInputName);
  const value = input.textContent;
  if (!value || value.length === 0 || value.trim().length === 0) return false;

  return true;
};

const highlightTextInput = (textInputName) => {
  let input = getInput(textInputName);
  input.classList.remove("default-input-look");
  input.classList.add("highlight-invalid-input");
};

const unhighlightTextInput = (textInputName) => {
  let input = getInput(textInputName);
  input.classList.remove("highlight-invalid-input");
  input.classList.add("default-input-look");
};
