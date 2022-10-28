const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const course = require("./data/course.json");
const course_2 = require("./data/course_copy_2.json");
const course_3 = require("./data/course_copy_3.json");
const course_4 = require("./data/course_copy_4.json");
const course_5 = require("./data/course_copy_5.json");

app.get("/", (req, res) => {
  res.send(course);
});

app.get("/2", (req, res) => {
  res.send(course_2);
});
app.get("/3", (req, res) => {
  res.send(course_3);
});
app.get("/4", (req, res) => {
  res.send(course_4);
});
app.get("/5", (req, res) => {
  res.send(course);
});
app.get("/6", (req, res) => {
  res.send(course_2);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
