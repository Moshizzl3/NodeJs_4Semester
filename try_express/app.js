const express = require("express");
const app = express();
//const app = require("express")() - samme som ovenfor, bare oneline.. den er lavet som ovenstående fordi man gerne vol have adgang til bibliotek.

app.get("/", (req, res) => {
  res.send("hello u");
});

//how to send data with GET request
app.get("/:id", (req, res) => {
  if (req.params.id === "1") {
    console.log("the real GOAT");
  } else {
    console.log("someone else");
  }
});

app.listen(8080);
