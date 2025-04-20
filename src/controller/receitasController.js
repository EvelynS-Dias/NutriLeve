import Receitas from "../model/receitas.js"
import { v4 as uuidv4 } from 'uuid';

 const databaseReceitas = [...Receitas];

export class ReceitasController {

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

static getAllReceitas(req,res) {
          res.json(databaseReceitas);
     }

  static getReceitasSemLactose(req,res) {
     const semLactose =  databaseReceitas.filter(receita => receita.paraIntoleranciaLactose === true);
     res.json(semLactose);
    }
   static getReceitasVegano(req,res) {
        const vegano =  databaseReceitas.filter(receita=>  receita.paraVeganos === true);
        res.json(vegano);
        }
   static getReceitasDiabetes(req,res) {
        const diabetes = databaseReceitas.filter(receita => receita.paraDiabeticos === true)
        res.json(diabetes);
            }
   static getReceitasSemGluten(req,res) {
        const semGluten = databaseReceitas.filter(receita => receita.semGluten === true)
         res.json(semGluten);
            }
     }

// export default new ReceitasController();


