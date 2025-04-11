import Receitas from "../model/receitas.js"
import ClassReceitas from "../model/ClassReceitas.js"



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
            
static async postNewReceita() {
const {idReceita } = req.params;
await prisma.Receita.create({
     data: {
       // campos do seu modelo User
       nome: req.body.nome,
       rendimento: req.body.rendimento,
       paraIntoleranciaLactose: req.body.para_intoleranciaLactose,
       paraDiabeticos: req.body.paraDiabeticos,
       semGluten: req.body.semGluten,
       paraVeganos: req.body.paraVeganos,
       ingredientes: req.body.ingredientes,
       modoPreparo: req.body.modoPreparo,
       categoria: req.body.categoria,
       nivel: req.body.nivel,
       tempoPreparo: req.body.tempoPreparo,
       recomendadoPara: req.body.recomendadoPara
     }
   });

}

}
// export default new ReceitasController();
