import {receitas} from "/routes/receitas.route"

class ReceitasController {

    getReceitasSemLactose(res,req) {
    const semLactose = receitas.filter(receita => receita.recomendado_para.includes("lactose"));
    res.send(semLactose);
    }
    getReceitasVegano(res,req) {
        const vegano = receitas.filter(receita => receita.recomendado_para.includes("vegano"));
        res.send(vegano);
        }
    getReceitasGlutên(res,req) {
        const semGluten = receitas.filter(receita => receita.recomendado_para.includes("glúten"));
        res.send(semGluten);
            }
}

export default ReceitasController;