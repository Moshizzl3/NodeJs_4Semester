const express = require("express");
const app = express();

const weaponsList = [
  { id: 1, name: "Shotgun", isAutomatic: false },
  { id: 2, name: "Gun", isAutomatic: false },
  { id: 3, name: "Automatic Rifle", isAutomatic: true },
];

//GET requests go here

app.get("/weapons", (req, res) => {
  res.send(weaponsList); 
});

app.get("/weapons/:id", (req, res) => {
  const id = Number(req.params.id);
  const weapon = weaponsList.find((weap) => weap.id === id);
  res.send(weapon);
});

app.get("/new-weapon", (req, res) => {
  const weapon = {
    id: Number(req.query.id),
    name: req.query.name,
    isAutomatic: Boolean(req.query.isAutomatic),
  };
  weaponsList.push(weapon);
  console.log(weaponsList);

  res.send(`${weapon.name} has now been saved`);
});


//Post requests go here

//Put requests go here

//Patch requests go here

//Delete requests go here




app.listen(8080, () => {
  console.log("Server is listning");
});
