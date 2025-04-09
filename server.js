import express from "express"
import receitas from "./routes/receitas.route.js";

const app = require("express");
const PORT = 3000;

app.use(express.json());
app.use("/receitas", receitas.route);

app.listen(PORT, (req,res) =>{
    res.send("Rodando!");
})


