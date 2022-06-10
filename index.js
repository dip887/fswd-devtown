const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.get("/todos", (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const { count } = req.query;

    if (count) {
      return res.send(todos.slice(0, count));
    } else {
      return res.send(todos.slice(0, count));
    }
  } catch (error) {
    return res.send(error.message);
  }
});

app.get("/todos/:id", (req, res) => {
  try {
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );
    const { id } = req.params;
    const todo = todos.find((e) => e.id == id);

    if (todo) {
      return res.send(todo);
    } else {
      return res.send("item not found");
    }
  } catch (error) {
    return res.send(error.message);
  }
});
//  post part left

app.post

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});
