import Router from "express";

export const weaponsRouter = Router(); //TODO: best practise to export variable this way? is it the node way? check up on this

const weapons = [
  { id: 1, name: "Shotgun", isAutomatic: false },
  { id: 2, name: "Gun", isAutomatic: false },
  { id: 3, name: "Automatic Rifle", isAutomatic: true },
];

//GET requests go here

weaponsRouter.get("/weapons", (req, res) => {
  res.status(200).send({ data: weapons });
});

weaponsRouter.get("/weapons/:id", (req, res) => {
  const id = Number(req.params.id);
  const weapon = weapons.find((weap) => weap.id === id);
  res.status(200).send(weapon);
});

//Post requests go here

//post through query string
weaponsRouter.post("/weapons", (req, res) => {
  const weapon = {
    id: Number(req.query.id),
    name: req.query.name,
    isAutomatic: Boolean(req.query.isAutomatic),
  };
  weapons.push(weapon);

  res.send(`${weapon.name} has now been saved`);
});

//post through params
weaponsRouter.post("/weapons/:id/:name/:isAutomatic", (req, res) => {
  const weapon = {
    id: Number(req.params.id),
    name: req.params.name,
    isAutomatic: Boolean(req.params.isAutomatic),
  };
  weapons.push(weapon);
  console.log(weapons);

  res.status.send(`${weapon.name} has now been saved`);
});

//post through req.body
weaponsRouter.post("/weapons", (req, res) => {
  weapons.push(req.body);
  res.status(200).send(`${req.body.name} has now been saved`);
});

//Put requests go here

weaponsRouter.put("/weapons/:id", (req, res) => {
  const id = Number(req.params.id);
  let body = { ...req.body };
  let index = weapons.findIndex((wep) => wep.id === id);
  let updatedWeapon = {
    id: id,
    ...body,
  };
  weapons[index] = updatedWeapon;

  res.status(200).send(`${req.body.name} has now been changed`);
});

//Patch requests go here

weaponsRouter.patch("/weapons/:id", (req, res) => {
  const id = Number(req.params.id);
  let body = { ...req.body };
  let index = weapons.findIndex((wep) => wep.id === id);

  for (let i in body) {
    if (body[i]) {
      weapons[index][i] = body[i];
    }
  }
  res.status(200).send(`${weapons[index].name} has now been changed`);
});

//Delete requests go here
