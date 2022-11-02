const express = require("express");
const app = express();
var cors = require('cors');
const connection = require('./connection.js');
const dogs = require("./dogs.js");
const PORT = process.env.PORT || 3001;

app.use(cors())
app.use(express.json())

app.listen(PORT, () => { 
    console.log(`Server listening on ${PORT}`);
  });

//Return all the dogs
app.get("/api/dogs", async (req,res) => {
    try{
        const dog = await dogs.find();
        res.json(dog);
    } catch (e){
        console.log(e);
    }
});

//Creates a new dog
app.post("/api/create",  (req,res) => {
    const dog = {
        "name":req.body.name,
        "phone":req.body.phone,
        "comments":req.body.comments
    } 
    dogs.create(dog, function(error) {
        if (error) {
          return next (error);
        } else {
            res.json(dog);
        }
      });
});

// To do 

//  app.put("/api/update/:id",async (req,res) => {
// });

// app.delete("/api/delete/:id", async (req,res) => {
// });