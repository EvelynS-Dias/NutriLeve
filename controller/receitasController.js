import {Receitas} from "../model/receitas.js"

class ReceitasController {

  static getReceitasSemLactose(req,res) {
     const semLactose = Receitas.filter(receita => receita.recomendado_para.some(item => item.includes("semLactose")))  
          res.send(semLactose);
    }
   static getReceitasVegano(req,res) {
        const vegano = Receitas.filter(receita => receita.recomendado_para.some(item => item.includes("vegano")));
        res.send(vegano);
        }
   static getReceitasDiabetes(req,res) {
        const diabetes = Receitas.filter(receita => receita.recomendado_para.some(item => item.includes("diabetes"))) 
        res.send(diabetes);
            }
   static getReceitasSemGluten(req,res) {
        const semGluten = Receitas.filter(receita => receita.recomendado_para.some(item => item.includes("glúten")))       
         res.send(semGluten);
            }
}

export default ReceitasController;