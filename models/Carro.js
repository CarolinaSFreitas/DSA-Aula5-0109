import { DataTypes } from "sequelize";
import { sequelize } from '../database/conecta.js'

export const Carro = sequelize.define('carro', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modelo: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(16),
        allowNull: false
    },
    ano: {
        type: DataTypes.INTEGER(4),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(9, 2),
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING(7),        
        allowNull: false,
        set(value) {
            this.setDataValue('placa', value.toUpperCase()) //vai deixar o registro em letra maiúscula
        }
    },
    status:{
        type: DataTypes.VIRTUAL,
        get() {
            const anoAtual = new Date().getFullYear()
            let conteudo
            if (this.ano == anoAtual){
                conteudo = "Novo"
            } else if (this.ano == anoAtual-1 || this.ano == anoAtual-2){
                conteudo = "Semi-novo"
            }else{
                conteudo = "usado"
            }
            return conteudo
        }
    }

}, {
    timestamps: false
});