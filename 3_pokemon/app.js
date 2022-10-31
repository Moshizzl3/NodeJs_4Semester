import express from "express";
import path from "path";
import fs from "fs";
import cors from "cors"

import { renderPage, injectData } from "./utils/templateEngine.js";
import contactRouter from "./routers/contactRouter.js";
import emailRouter from "./routers/emailRouter.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors())


app.use(express.static("public"));
app.use(contactRouter);
app.use(emailRouter);


const navComponent = fs
  .readFileSync("./public/components/navbar/navbar.html")
  .toString();
const footerComponent = fs
  .readFileSync("./public/components/footer/footer.html")
  .toString();

const frontpage = fs
  .readFileSync("./public/pages/frontpage/frontpage.html")
  .toString();
const battlepage = fs
  .readFileSync("./public/pages/battle/battle.html")
  .toString();
const contactPage = fs
  .readFileSync("./public/pages/contact-page/contact-page.html")
  .toString();

const frontpagePage =
  navComponent
    .replace("%%TAB_TITLE%%", "Pokemon Frontpage")
    .replace(
      "%%Link_Style%%",
      '<link rel="stylesheet" href="/pages/frontpage/frontpage.css">'
    ) +
  frontpage +
  footerComponent;

const battlepagePage =
  navComponent.replace(
    "%%Link_Style%%",
    '<link rel="stylesheet" href="/pages/battle/battle.css">'
  ) +
  battlepage +
  footerComponent;

const contactpagePage =
  navComponent.replace("%%TAB_TITLE%%", "Pokemon battlepage") +
  contactPage +
  footerComponent;

app.get("/", (req, res) => {
  res.send(frontpagePage);
});

app.get("/battle", (req, res) => {
  res.redirect("battle/ditto");
});

app.get("/battle/:pokemonName", (req, res) => {
  const pokemonName = req.params.pokemonName;
  let battlepageWithData = injectData(battlepagePage, { pokemonName });
  res.send(
    battlepageWithData.replace(
      "%%TAB_TITLE%%",
      `Battle ${req.params.pokemonName}`
    )
  );
});

app.get("/contact", (req, res) => {
  res.send(contactpagePage);
});

app.get("/pokemon", async (req, res) => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
  );
  const data = await response.json();
  res.send({ data: data.results });
});

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log("server is running", server.address().port);
});

console.log(process.env.PORT);
