const express = require("express");
const app = express();


var path = require("path");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, "/images")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/contact.html");
});

app.get("/chatgpt", (req, res) => {
  res.sendFile(__dirname + "/chatgpt.html");
});

app.get("/3habit", (req, res) => {
  res.sendFile(__dirname + "/3habit.html");
});

app.get("/ml", (req, res) => {
  res.sendFile(__dirname + "/machinelearning.html");
});

app.get("/imageclassification", (req, res) => {
  res.sendFile(__dirname + "/imageclassification.html");
});

app.get("/codingwontexist", (req, res) => {
  res.sendFile(__dirname + "/codingwontexist.html");
});

app.get("/nodejs", (req, res) => {
  res.sendFile(__dirname + "/nodejs.html");
});

app.get("/search", (req, res) => {
  res.sendFile(__dirname + "/search.html");
});

app.listen(4000, function (err) {
  if (err) {
    console.log(err);
  }
});
