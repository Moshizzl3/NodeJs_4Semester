const { response } = require("express");
const express = require("express")
const app = express();


app.get("/", (request, response) =>{
    response.send({massage: "created my first route. check."})
})

app.listen(8080);