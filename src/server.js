import express from "express"
import {receitasRouter, siteRouter} from "./routes/receitas.route.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/receitas", receitasRouter);
app.use("/", siteRouter);


app.listen(PORT, () =>{
    console.log("Rodando!");
})


