const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("hello from node and express");
});

const users = [
  { id: 0, name: "Raihan", email: "raihan@gmail.com", phone: "016908972" },
  { id: 1, name: "Tanvir", email: "tanvir@gmail.com", phone: "016908972" },
  { id: 2, name: "Akash", email: "akash@gmail.com", phone: "016908972" },
  { id: 3, name: "Opi", email: "opi@gmail.com", phone: "016908972" },
  { id: 4, name: "Wazed", email: "wazed@gmail.com", phone: "016908972" },
  { id: 5, name: "Nahim", email: "nahim@gmail.com", phone: "016908972" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.METHOD
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(JSON.stringify(newUser));
  res.json(newUser);
  console.log("hitting the post", req.body);
  res.send("inside the post");
});

// dynamic api
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});
app.listen(port, () => {
  console.log("Listening to port", port);
});
