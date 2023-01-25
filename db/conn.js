const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect("mongodb://localhost:27017/Jokes-API" || DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection");
});