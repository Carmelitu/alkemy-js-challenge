import { Movement } from "../models/Movements.js";

export const saveMovement = async (req, res, next) => {
    
    console.log(req.body);

    try {
        await Movement.create(req.body);
        res.json({message: 'Added successfully'});
    } catch (error) {
        console.log(error);
        next();
    }
}

export const getMovements = async (req, res, next) => {
    try {
        const movements = await Movement.findAll();
        res.json(movements);
    } catch (error) {
        console.log(error);
        next();
    }
}

