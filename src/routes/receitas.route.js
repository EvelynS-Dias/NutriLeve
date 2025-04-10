import express from "express"
// import ReceitasController from "../controller/receitasController.js"

import  {ReceitasController} from "../controller/receitasController.js"

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Bem vindo ao site!");
});



console.log(ReceitasController);
router.get("/vegano", ReceitasController.getReceitasVegano);
router.get("/semLactose", ReceitasController.getReceitasSemLactose);
router.get("/semGluten", ReceitasController.getReceitasSemGluten);
router.get("/diabetes", ReceitasController.getReceitasDiabetes);
router.get("/todasReceitas", ReceitasController.getAllReceitas);




export default router; 