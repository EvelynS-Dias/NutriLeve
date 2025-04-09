import express from "express"

const app = express();
const PORT = 3000;


app.listen(PORT, (res,req) =>{
    res.send("Rodando!");
})

