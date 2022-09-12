import express from "express";
import path from "path";
const app = express();

app.use(express.static("public"));

import { incrementVistorCounter } from "./geocitiesUtil.js";

app.get("/", (req, res) => {
  console.log("visitors since the server startet", incrementVistorCounter());
  //res.sendFile("/public/frontpage.html", { root: __dirname }); only works in vanilla
  res.sendFile(path.resolve("./public/frontpage.html"));
});

app.listen(8080, () => {
  console.log("Server is running");
});
