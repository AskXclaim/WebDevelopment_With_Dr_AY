"use strict";

const express = require("express");

const app = express();

const portNumber = 3000;

app.get("/", (req, res) => {
  console.log(req);
  res.send("<h1>Hello world express</h1>");
});

app.get("/about", (req, res) => {
  res.send("My name is Kola, a full stack software dev");
});
app.listen(portNumber, () => {
  console.log(`Server is listening on ${portNumber}`);
});
