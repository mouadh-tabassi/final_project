import mongoose from "mongoose";
 const User=mongoose.model('User',{
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    phonenumber:{
        type:String
    },
    birthdate:{
        type:String
    },
    gender:{
        type:String
    }
 })
 export default User;
 
