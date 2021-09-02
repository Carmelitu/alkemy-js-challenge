import Sequelize from "sequelize";
import db from '../config/db.js';

export const Movimientos = db.define('movimientos', {
    concepto: {
        type: Sequelize.STRING
    },
    monto: {
        type: Sequelize.BIGINT
    },
    fecha: {
        type: Sequelize.DATE
    },
    tipo: {
        type: Sequelize.STRING
    }
});