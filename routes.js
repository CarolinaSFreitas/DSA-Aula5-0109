import { Router } from "express"
import { carroCreate, carroIndex, carroUpdate, carroDelete } from "./controllers/carroController.js"

const router = Router()

router.get("/carros", carroIndex) //rota pra listagem
      .post("/carros", carroCreate) //rota pra criação de registro
      .put("/carros/:id", carroUpdate) //rota pra alteração do registro
      .delete("/carros/:id", carroDelete) //rota pra deletar registro de carro
export default router