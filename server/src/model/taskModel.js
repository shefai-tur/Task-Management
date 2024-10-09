 const mongoose = require('mongoose')
 const { Schema } = mongoose;
 const TaskSchema = new Schema({
    title:{
        type:String,
        required:true,
      
    },
    desc:{
        type:String,
        required:true,
       
    },
    importent:{
        type:Boolean,
        default:false
    },
    complate:{
        type:Boolean,
        default:false
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: "user",
    //   },
 },{timestamps:true})

 module.exports = mongoose.model("task",TaskSchema)