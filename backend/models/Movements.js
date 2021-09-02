import Sequelize from "sequelize";
import db from '../config/db.js';

export const Movement = db.define('movements', {
    concept: {
        type: Sequelize.STRING
    },
    amount: {
        type: Sequelize.BIGINT
    },
    date: {
        type: Sequelize.DATE
    },
    type: {
        type: Sequelize.STRING
    }
});