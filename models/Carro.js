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
            this.setDataValue('placa', value.toUpperCase())
        }
    },

}, {
    timestamps: false
});