import { timeStamp } from "console";
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username:{type: String,required:true,unique:true,min:3,max:8},
    email:{type: String,required:true,unique:true,max:8},
    password:{type: String,required:true,min:3},
    image:{type: String},
    isAdmin:{type:Boolean,default:false}
},{timeStamp:true});


const postSchema = new mongoose.Schema({
    title:{type: String,required:true},
    desc:{type: String,required:true},
    image:{type: String},
    userId:{type:String,required:true},
    slug:{type:String,required:true,unique:true}
},{timeStamp:true})

export const User =mongoose.models.User || mongoose.model('User',userSchema)
export const Post =mongoose.models.User || mongoose.model('Post',postSchema)