import express from 'express'
import { sequelize } from './database/conecta.js'
import { Carro } from './models/Carro.js'
import routes from './routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(routes)

async function conecta_db() {
  try {
    await sequelize.authenticate();
    console.log('Conexão bem sucedida.');
    await Carro.sync()              //vai ciar a tabela no banco(se nao existir já)
    console.log("Tabela de Carros: Ok!")
  } catch (error) {
    console.error('Impossível conectar ao banco de dados:', error);
  }
}
conecta_db()

app.listen(port, () => {
  console.log(`API de Carros Rodando na Porta ${port}`)
})

app.get('/', (req, res) => {
  res.send('Sistema de Carros')
})


