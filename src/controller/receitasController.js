import Receitas from "../model/receitas.js"
import { v4 as uuidv4 } from 'uuid';

 const databaseReceitas = [];


export class ReceitasController {

static getAllReceitas(req,res) {
          res.json(Receitas);
     }

  static getReceitasSemLactose(req,res) {
     const semLactose =  Receitas[0].filter(receita => receita.paraIntoleranciaLactose === true);
     res.json(semLactose);
    }
   static getReceitasVegano(req,res) {
        const vegano =  Receitas[0].filter(receita=>  receita.paraVeganos === true);
        res.json(vegano);
        }
   static getReceitasDiabetes(req,res) {
        const diabetes = Receitas[0].filter(receita => receita.paraDiabeticos === true)
        res.json(diabetes);
            }
   static getReceitasSemGluten(req,res) {
        const semGluten = Receitas[0].filter(receita => receita.semGluten === true)
         res.json(semGluten);
            }

     static addReceita(req, res) {
     const {nome,paraIntoleranciaLactose,
          paraDiabeticos, semGluten,paraVeganos,ingredientes,modoPreparo} = req.body

          if(!nome || !ingredientes || !modoPreparo) {
             return  res.status(404).json({mensagem: "Por favor, insira os dados"});
          }
          else { 
          const novaReceita = {id: uuidv4() ,
                nome,
                paraIntoleranciaLactose,
                 paraDiabeticos,
                semGluten,paraVeganos,
               ingredientes,modoPreparo};

               databaseReceitas.push(novaReceita);
               res.status(201).json( {mensagem: "Receita criada com sucesso!",
                    receita: novaReceita } );
          }
     }
     }

// export default new ReceitasController();
