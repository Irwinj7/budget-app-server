const express = require("express");
const input = express.Router();
const inputArray = require("../models/inputExample.js");

//INDEX
input.get("/", (req, res) => {
    res.json(inputArray);
})

// SHOW
input.get("/:arrayIndex", (req, res) => {
    if (inputArray[req.params.arrayIndex]) {
        res.json(inputArray[req.params.arrayIndex]);
    } else {
        res.redirect(404).json({error: "Not Found!!!" });
    }
});

// CREATE
input.post("/", (req, res) => {
    inputArray.push(req.body);
    res.json(inputArray[inputArray.length - 1]);
});

// DELETE
input.delete("/:indexArray", (req, res)=> {
    if (inputArray[req.params.indexArray]){
        const deletedLog = inputArray.splice(req.params.indexArray, 1);
        res.status(200).json(deletedLog)
    } else {
        res.status(404).json({ error: "Not Found" })
    }
})

// UPDATE
input.put("/:arrayIndex", (req,res) =>{
    if (inputArray[req.params.arrayIndex]){
        inputArray[req.params.arrayIndex] = req.body;
        res.status(200).json(inputArray[req.params.arrayIndex])
    } else {
        res.status(404).json({ error: "Not Found" });
    }
})

module.exports = input