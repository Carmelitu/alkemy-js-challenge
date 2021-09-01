const express = require('express');

const app = express();

// Define port
const port = process.env.PORT || 4000;

app.get('/', () => {

})

app.listen( () => {
    console.log(`Server Working at Port: ${port}`)
})