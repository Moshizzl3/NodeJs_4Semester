import express from "express"
import {weaponsRouter} from "./routes/weapons.js"

const app = express();

app.use(express.json());
app.use(weaponsRouter)


app.listen(8080, ()=>{
    console.log("Server is running", 8080)
})