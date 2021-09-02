import express from 'express';
const router = express.Router();
import {saveMovement, getMovements} from '../controllers/MovementsController.js';


router.get('/', (req, res) => {
    res.send('Budget');
});

router.post('/movements', saveMovement);

router.get('/movements', 
    getMovements
);


export default router;
