const fs = require("fs");
const path = require("path");

const something = (req, res, next) => {
  console.log(req.url);
  res.send("hi");
  console.log("you made a request");
};

const isAuthorised = (req, res, next) => {
  const { authorization: key } = req.headers;
  //   console.log(key);
  const users = JSON.parse(
    fs.readFileSync(path.join(path.resolve(), "users.json"), {
      encoding: "UTF-8",
    })
  );

  const user = users.find((u) => u.api_key == key);

  if (user) next();
  else res.send("unauthorised");
};

const isValidTodo = (req, res, next) => {
  const { title, completed } = req.body;

  if (title.length > 0) next();
  else res.send("Invalid title");
};

module.exports = {
  something,
  isAuthorised,
};
