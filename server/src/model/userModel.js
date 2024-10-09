const mongoose = require("mongoose")
const { Schema } = mongoose;
const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    tasks:[
        {
            type:Schema.Types.ObjectId,
            ref:"task",
        }
    ]
})

module.exports = mongoose.model("user",UserSchema)
