import express from "express"
import cors from "cors"
import router from "./routes/receitas.route.js";

const app = express();
const PORT = process.env.PORT;

app.use(cors());


app.use(express.json());


app.use("/receitas", router);


app.listen( PORT, () =>{
    console.log("Rodando!");
})


