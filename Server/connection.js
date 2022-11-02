const mongoose = require("mongoose");

require("dotenv").config();

const uri = process.env.MONGO_URL;

const connexion = mongoose
    .connect(uri)
    .then(() =>{
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to the database ",err); 
    });

module.exports = connexion ; 