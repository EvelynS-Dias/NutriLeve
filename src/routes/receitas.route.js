import express from "express"
// import ReceitasController from "../controller/receitasController.js"

import  {ReceitasController} from "../controller/receitasController.js"
import Receitas from "../model/receitas.js";

const receitasRouter = express.Router();
const siteRouter = express.Router();

siteRouter.get("/Inicio", (req,res)  =>{
res.send("Bem-vindo ao site!")
});
siteRouter.get("/aboutUs", (req,res) => {
    res.send("Sobre nós");
});
siteRouter.get("/Contact", (req,res) => {
    res.send("Contato");
});



console.log(ReceitasController);
receitasRouter.get("/vegano", ReceitasController.getReceitasVegano);
receitasRouter.get("/semLactose", ReceitasController.getReceitasSemLactose);
receitasRouter.get("/semGluten", ReceitasController.getReceitasSemGluten);
receitasRouter.get("/diabetes", ReceitasController.getReceitasDiabetes);
receitasRouter.get("/", ReceitasController.getAllReceitas);
receitasRouter.post("/novaReceita", ReceitasController.postNewReceita);


receitasRouter.put("/receita/:idReceita", ReceitasController.getReceitasSemGluten); 



export { siteRouter, receitasRouter};