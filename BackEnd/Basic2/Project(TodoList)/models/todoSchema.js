const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        created_IN:{
            type:Date,
            // required:true,
            default:Date.now
        },
        updated_IN:{
            type:Date,
            // required:true,
            default:Date.now
        }
});

// todo ke naam se kahi bhi use karo
module.exports = mongoose.model("todo", todoSchema);