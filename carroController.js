import { Carro } from "../models/Carro.js"

//função de get - vai listar os carros no insomnia
export async function carroIndex(req, res) {
    try {
        const carros = await Carro.findAll()
        res.status(200).json(carros)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de create - vai criar um novo registro no insomnia
export async function carroCreate(req, res) {
    const { modelo, marca, ano, preco, placa } = req.body

    if (!modelo || !marca || !ano || !preco || !placa) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const carro = await Carro.create({
            modelo, marca, ano, preco, placa
        })
        res.status(201).json(carro)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função de update/alterar registro no insomnia
export async function carroUpdate(req, res) {
    const { id } = req.params

    const { modelo, marca, ano, preco, placa } = req.body

    if (!modelo || !marca || !ano || !preco || !placa) {
        res.status(400).json("Erro... Informe todos os atributos.")
        return
    }

    try {
        const carro = await Carro.update({
            modelo, marca, ano, placa, preco
        }, {
            where: { id }
        })
        res.status(200).json(carro)
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de deletar registro no insomnia
export async function carroDelete(req, res) {
    const { id } = req.params

    try {
        await Carro.destroy({
            where: { id }
        })
        res.status(200).json({ msg: "Ok! Removido com sucesso :)" })
    } catch (error) {
        res.status(400).send(error)
    }
}

//função de retornar os carros por ordem de ano em ordem desc
export async function carroOrdem(req, res) {

    try {
        const carros = await Carro.findAll({
            order: [
                // Will escape title and validate DESC against a list of valid direction parameters
                ['ano', 'DESC']

            ]
        })
        res.status(200).json(carros)
    } catch (error) {
        res.status(400).send(error)
    }
}

// função finder pra achar pela palavra chave (marca do carro)
export async function carroPesquisa(req, res) {
    const { Op } = require("sequelize");
    Post.findAll({
      where: {
        marca: {
          [Op.eq]: Fiat
        }
      }
    });
    // SELECT * FROM post WHERE authorId = 2;

}