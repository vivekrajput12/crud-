const express  = require('express');
const calculator =  require('../calculator.js');
const router = express.Router();
const {create }= require('../crud.js');
// const update = require('../crud.js');
// const deleteTable = require('../crud.js');
// const read = require('../crud.js');

router.post("/" , (req , res)=>{
    const{num1 , num2 , op} = req.body;
    console.log("Received:", num1, num2, op);
    const result = calculator(num1 , num2 , op);
    console.log("cal ke neche");
    res.status(201).send({result});
})

router.post("/create",create);

module.exports = router;