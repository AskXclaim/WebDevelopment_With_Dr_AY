"use strict";
// const helpFunc = require("./scripts/HelperFunctions");
const helpFunc = require(`${__dirname}/scripts/HelperFunctions`);
const port = process.env.PORT || "3000";
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const items = ["Talk with Papa", "Listen to Papa", "Accept his gifts"];
const workItems = [];
const workTitle = "Work Item(s)";

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  try {
    res.render("index", helpFunc.getIndexEjsModel(items));
  } catch (error) {
    console.log(`The following error occurred:${error.message}`);
    res.render("index", helpFunc.getIndexEjsModel(items));
  }
});

app.get("/work", (req, res) => {
  res.render("index", helpFunc.getIndexEjsModel(workItems, workTitle));
});
app.get("/work.html", (req, res) => {
  res.render("index", helpFunc.getIndexEjsModel(workItems, workTitle));
});

app.get("/about.html", (req, res) => {
  res.render("about");
});
app.get("/about", (req, res) => {
  res.render("about");
});

app.post("/todoList", (req, res) => {
  const item = req.body.newItem;
  const btnValue = req.body.button;

  if (item && btnValue === workTitle) {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
