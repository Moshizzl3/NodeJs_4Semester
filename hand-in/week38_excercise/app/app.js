import express, { json } from "express";
import path from "path";
import { planetsRouter } from "./routes/planetsRouter.js";

const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(planetsRouter);

app.get("/frontpage", (req, res) => {
  res.sendFile(path.resolve("./public/frontpage.html"));
});

app.listen(port, () => {
  console.log("Server is running on port:", port);
});
