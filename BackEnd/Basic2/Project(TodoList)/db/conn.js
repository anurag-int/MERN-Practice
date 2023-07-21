const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path : './config.env'});
const DB = process.env.DATABASE_URL;
const connection = mongoose.connect(DB,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log("Connection successfully");
})
.catch((err)=>{
    console.log(err);
    console.log("Not Connected");
})


module.exports = connection;
