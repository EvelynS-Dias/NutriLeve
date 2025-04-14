import express from "express"
import router from "./routes/receitas.route.js";

const app = express();
const PORT = 3000;



app.use(express.json());


app.use("/receitas", router);


app.listen(PORT, () =>{
    console.log("Rodando!");
})


