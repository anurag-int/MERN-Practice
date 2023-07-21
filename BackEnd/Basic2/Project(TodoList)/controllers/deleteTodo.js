const Todo = require('../models/todoSchema');
const express = require('express');
const bodyParser = require('body-parser');

exports.deleteTodo = async(req, res)=>{
    try{
       const id = req.params.id;

       await Todo.findByIdAndDelete(id);
       
       res.json({message: "Todo deleted"});
    }
    catch(err){
       console.log(err);
       res.status(500)
       .json({message: "Server Error"});
    }
}