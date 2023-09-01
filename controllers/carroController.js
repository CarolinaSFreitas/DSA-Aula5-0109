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

