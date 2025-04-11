import Receitas from "../model/receitas.js"


export class ReceitasController {

static getAllReceitas(req,res) {
          res.send(Receitas);
     }

  static getReceitasSemLactose(req,res) {
     const semLactose =  Receitas[0].filter(receita => receita.paraIntoleranciaLactose === true);
     res.send(semLactose);
    }
   static getReceitasVegano(req,res) {
        const vegano =  Receitas[0].filter(receita=>  receita.paraVeganos === true);
        res.send(vegano);
        }
   static getReceitasDiabetes(req,res) {
        const diabetes = Receitas[0].filter(receita => receita.paraDiabeticos === true)
        res.send(diabetes);
            }
   static getReceitasSemGluten(req,res) {
        const semGluten = Receitas[0].filter(receita => receita.semGluten === true)
         res.send(semGluten);
            }
}

// export default new ReceitasController();
