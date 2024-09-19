 const mongoose = require('mongoose')

 const TaskSchema = new mongoose.Schema({
    titel:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    importent:{
        type:Boolean,
        default:false
    },
    complate:{
        type:Boolean,
        default:false
    },
 },{timestamps:true})

 module.exports = mongoose.model("task",TaskSchema)