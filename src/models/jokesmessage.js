const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
});
const Jokes = new  mongoose.model("jokers", jokeSchema);
module.exports = Jokes;