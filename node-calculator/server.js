"use strict";

const portNumber = "3000";
const express = require("express");
const bodyParser = require("body-parser");
const calculator = require("./calculator");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/calculator", (req, res) => {
  res.sendFile(`${__dirname}/pages/index.html`);
});
app.get("/bmicalculator", (req, res) => {
  res.sendFile(`${__dirname}/pages/bmicalculator.html`);
});

app.post("/", (req, res) => {
  const result = calculator.calculate(req.body);
  res.send(`The result is ${result}`);
});

app.post("/bmicalculator", (req, res) => {
  const result = calculator.calculateBmi(req.body);
  res.send(`Your BMI is ${result}`);
});
app.listen(portNumber, () => {
  console.log(`Server is running on port ${portNumber}`);
});
