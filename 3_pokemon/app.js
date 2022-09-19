import express from "express";
import path from "path"

const app = express()
app.use(express.static("public"));


app.get("/", (req, res) =>{

    res.sendFile(path.resolve("./public/frontpage.html"))
})

app.get("/pokemon", (req, res) =>{
    res.send({data: ["slowpoke"]})
})


app.listen(8080, () => console.log("server is running"))