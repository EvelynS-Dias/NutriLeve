import { Router } from "express"

receitas = router() 

receitas.get("/")
receitas.get("/semLactose");
receitas.get("/diabetes");
receitas.get("semGluten");