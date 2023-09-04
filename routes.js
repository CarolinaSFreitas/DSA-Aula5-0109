import { Router } from "express"
import { carroCreate, carroIndex, carroUpdate, carroDelete, carroOrdem, carroPesquisa } from "./controllers/carroController.js"

const router = Router()

router.get("/carros", carroIndex) //rota pra listagem
      .post("/carros", carroCreate) //rota pra criação de registro
      .put("/carros/:id", carroUpdate) //rota pra alteração do registro
      .delete("/carros/:id", carroDelete) //rota pra deletar registro de carro
      .get("/carros/ordem", carroOrdem) //rota pra listar por ordem, o get é sempre pra listagem/pesquisar
      .get("/carros/pesquisa", carroPesquisa) //rota pra fazer a pesquisa por marca, tb usa o get
export default router