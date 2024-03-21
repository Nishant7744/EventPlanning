import mongoose from "mongoose";
import validator from "validator";

const messageSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name Required"],
        minLength:[3,"Name Contain At Least 3 Character"],
    },
    email:{
        type:String,
        required:[true,"Email Required"],
        validate:[validator.isEmail,"Please Provide Valid Email Address"]
    },
    subject:{
        type:String,
        required:[true,"Subject Required"],
        minLength:[5,"Subject Contain At Least 5 Character"],
    },
    message:{
        type:String,
        required:[true,"Message Required"],
        minLength:[10,"Name Contain At Least 10 Character"],
    },
})

export const Message=mongoose.model("Message",messageSchema);