const { Router } = require("express");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { something, isAuthorised } = require("./middlewares/index");
const shortid = require("shortid");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
// app.use(something);

/*
TYPE: POST
PARAMS: Null
QUERY: count
Body: email
DESCRIPTION: route to create a user
*/

app.post("/user", (req, res) => {
  try {
    const { email } = req.body;
    const users = JSON.parse(
      fs.readFileSync(path.join(__dirname, "users.json"), { encoding: "UTF-8" })
    );

    const user = {
      email,
      api_key: shortid.generate(),
    };

    users.push(user);
    fs.writeFileSync(path.join(__dirname, "users.json"), JSON.stringify(users));
    console.log(users);
    res.send(user);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

/*
TYPE: GET
PARAMS: Null
QUERY: Count
DESCRIPTION: route to fetch all todo
*/

app.get("/todos", isAuthorised, (req, res) => {
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

/*
TYPE: GET
PARAMS: id
QUERY: Null
DESCRIPTION: route to fetch a specific todo 
*/
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

/*
TYPE: POST
PARAMS: Null
QUERY: Null
Body: 
DESCRIPTION: route to add a specific todo
(also we must add header in this case as content-type)
(id is auto-assigned by our data structure)
*/

app.post("/todos", (req, res) => {
  try {
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const todo = {
      ...data,
      id: todos.length + 1,
    };

    todos.push(todo);
    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(todos));
    // console.log(todo);
    res.send(todo);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

/*
TYPE: Delete
PARAMS: id
QUERY: Null
Body: 
DESCRIPTION: route to delete a specific todo
*/

app.delete("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    //if it's true , its remove the element means filter out
    const newTodos = todos.filter((todo) => todo.id != id);

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    // console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

/*
TYPE: put
PARAMS: id
QUERY: Null
Body: 
DESCRIPTION: route to update a specific todo
*/

app.put("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const todos = JSON.parse(
      fs.readFileSync(path.join(__dirname, "db.json"), { encoding: "UTF-8" })
    );

    const newTodos = todos.map((todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          ...data,
        };
      } else {
        return todo;
      }
    });

    fs.writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(newTodos));
    // console.log(todo);
    res.send(newTodos);
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
});

app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});
