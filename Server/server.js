const express = require("express");
const app = express();
const cors = require('cors');
const connection = require('./connection.js');
//const path = require('path')

const PORT = process.env.PORT || 3001;

// app.use(express.json({limit: '5mb'}));
// app.use(express.urlencoded({limit: '5mb'}));

app.use(cors());
app.use(express.json());


app.listen(PORT, () => { 
    console.log(`Server listening on ${PORT}`);
});

// calling routes
app.use('/',require('./router/router'));