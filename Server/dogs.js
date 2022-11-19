const mongoose = require("mongoose");

const schema = new mongoose.Schema({
        name: {
            type: String,
            required: true,
        }, 
        phone:{
            type: String,
            required: true,
        },
        comments:{
            type: String,
        },
        photos: {
            type:String,
        },
    }
);

const Dog = mongoose.model("Dog", schema);
module.exports = Dog;