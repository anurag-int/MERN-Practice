const Todo = require('../models/todoSchema');
const express = require('express');
const bodyParser = require('body-parser');

exports.getTodo = async(req, res)=>{
    try{
        
        const data = await Todo.find({});
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


exports.getTodoById = async(req, res)=>{
    try{

        const id = req.params.id;
        const data = await Todo.findById({_id:id});
        if(!data){
            return res.status(404).json({message:"Wrong id"});
        }
        else
        {
            res.status(200).json({
                success:true,
                data:data,
                message:"data of the id passed"
            })
        }
        
    }
    catch(err)
    {
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"Server Error"
        })
    }
}

 
   
