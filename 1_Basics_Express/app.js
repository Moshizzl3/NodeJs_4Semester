const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send({ message: "created my first route. check." });
  
});

app.get("/deers", (req, res) => {
  res.send({ size: "big" });
});


app.get("/date",(req, res) =>{
  console.log(new Date().getMonth())
  res.send({date:new Date()})
})

app.get("/cups", (req, res) => {
  res.send({ size: "small mug" });
});

app.get("/lookunderthebed", (req, res) => {
  const hasFlashlight = Boolean(req.query.hasFlashlight)
  

  if(hasFlashlight){
    res.redirect("/safe")
  }
  else{
    res.redirect("/monster")
  }
});

app.get("/monster", (req, res) => {
  res.send({ message: "monster" });
});

app.get("/safe", (req, res) => {
  res.send({ message: "ur safe" });
});

app.listen(8080);
