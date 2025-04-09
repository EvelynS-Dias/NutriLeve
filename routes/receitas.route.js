import express from "express"
import ReceitasController from "../controller/receitasController.js";

const router = express.Router();

router.get("/", (req,res) => {
    res.send("Bem vindo ao site!");
});
router.get("/semLactose", ReceitasController.getReceitasSemLactose);
router.get("/semGluten", ReceitasController.getReceitasSemGluten);
router.get("/diabetes", ReceitasController.getReceitasDiabetes);

export default router; 