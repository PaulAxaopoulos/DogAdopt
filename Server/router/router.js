const route = require('express').Router();
const dogs = require("../dogs.js");  
const upload = require('../middleware/multer');

//Return all the dogs
route.get("/dogs", async (req,res) => {
    try{
        const dog = await dogs.find();
        res.json(dog); 
    } catch (e){
        console.log(e); 
    }
});

//Creates a new dog
route.post("/create", upload.single('photos'), (req,res,next) => {
    
    const dog = {
        "name":req.body.name,
        "phone":req.body.phone,
        "comments":req.body.comments,
        "photos":req.file.filename
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
 
module.exports = route;