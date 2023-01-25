const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection successful");
}).catch((error)=>{
    console.log(error);
    console.log("No Connection");
});