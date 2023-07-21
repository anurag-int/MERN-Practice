const Todo = require('../models/todoSchema');
const express = require('express');
const bodyParser = require('body-parser');

exports.updateTodo = async(req, res)=>{
    try{
       
        const id = req.params.id;
        const data = await Todo.findByIdAndUpdate(id,{});
        res.status(200).json({
            success:true,
            data:data,
            message:"Entire Todo Data is fetched"
        });
    }
    catch(err){
       console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}