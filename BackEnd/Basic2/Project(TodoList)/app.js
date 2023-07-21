const express = require('express');
const app = express();
const dotenv = require('dotenv');
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
app.use(express.json());

require('./db/conn'); 
const todoRoutes = require("./routes/todos")
dotenv.config({path: './config.env'});



app.get("/", (req, res)=>{
    res.send(`<h1>Hello mere dosto </h1>`);
})

app.use("/api/v1", todoRoutes); 

app.listen(PORT, ()=>{
    console.log(`Server listening at Port ${PORT}`);
})


