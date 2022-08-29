const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send({ message: "created my first route. check." });
});

app.listen(8080);
