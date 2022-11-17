const express = require("express");
const app = express();
var cors = require('cors');
const connection = require('./connection.js');


const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

app.listen(PORT, () => { 
    console.log(`Server listening on ${PORT}`);
});

// calling routes
app.use('/',require('./router/router'))