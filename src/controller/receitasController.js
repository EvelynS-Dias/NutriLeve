import Receitas from "../model/receitas.js"



export class ReceitasController {

static getAllReceitas(req,res) {
          res.send(Receitas);
     }

  static getReceitasSemLactose(req,res) {
     const semLactose =  Receitas[0].filter(receita => receita.para_intolerancia_lactose === true);
     res.send(semLactose);
    }
   static getReceitasVegano(req,res) {
        const vegano =  Receitas[0].filter(receita=>  receita.para_veganos === true);
        res.send(vegano);
        }
   static getReceitasDiabetes(req,res) {
        const diabetes = Receitas[0].filter(receita => receita.para_diabéticos === true)
        res.send(diabetes);
            }
   static getReceitasSemGluten(req,res) {
        const semGluten = Receitas[0].filter(receita => receita.sem_gluten === true)
         res.send(semGluten);
            }
}

// export default new ReceitasController();
