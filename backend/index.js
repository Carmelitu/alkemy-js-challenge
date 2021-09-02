import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// Connect to DB
db.authenticate()
    .then( () => console.log('DB Connected'))
    .catch( error => console.log(error));

// Define port
const port = process.env.PORT || 4000;

// Add router
app.use('/', router);


app.listen(port, () => {
    console.log(`Server Working at Port: ${port}`);
});