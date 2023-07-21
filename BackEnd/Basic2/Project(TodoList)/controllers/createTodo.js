const Todo = require('../models/todoSchema');
const express = require('express');
const bodyParser = require('body-parser');

exports.createTodo = async(req, res)=>{
    try{
        const {title, description} = req.body;

        const newTodo = new Todo({title, description});
        const saved = await newTodo.save();
        res.status(200).json(
            {
                message : "All done successfully"
            }
         )
    }
    catch(err){
        res.status(500)
        .json({
            error : "Try again" 
        })
        console.log(err); 
    }
}



