const express = require("express");
const router = express.Router();

const Jokes = require("../models/jokesmessage");

router.post("/", async (req, res)=>{
    try{
        const jokesData = new Jokes(req.body);
        await jokesData.save();
            // res.status(201).send(mensData)
            res.status(201).json({message:"Successful"})

    }catch(error){
        // res.status(400).send(error)
        res.status(400).json({error:"Invalid"})
        console.log(error)
    };
});

router.get("/", async (req, res)=>{
    try{
        const getJokes = await Jokes.find({}).sort({"ranking":1});
        res.status(200).send(getJokes);
    }catch(error){
        res.status(400).send(error);
    }

});


router.get("/:id", async (req, res)=>{
    try{
        const getJoke = await Jokes.findById(req.params.id);
        res.status(200).send(getJoke);
    }catch(error){
        res.status(400).send(error);
    }
});


router.patch("/:id", async (req, res)=>{
    try{
        const patchtJoke = await Jokes.findByIdAndUpdate(req.params.id, req.body, {
            new:true
        });
        res.status(201).send(patchtJoke);
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
});


router.delete("/:id", async (req, res)=>{
    try{
        const deleteJoke = await Jokes.findByIdAndDelete(req.params.id);
        res.status(200).send(deleteJoke);
    }catch(error){
        res.status(500).send(error);
        console.log(error);
    }
});
module.exports = router;