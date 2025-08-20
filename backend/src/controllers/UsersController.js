import User from "../../models/User.js";
import bcrypt from 'bcrypt';
export async function getUsers(req,res){
    try {
        const usrs = await User.find()
        res.status(200).json(usrs)
    } catch (error) {
        res.status(404).json({error:"not found"});
    }
}
export async function postUsers(req,res){
    try {
    const {firstname,lastname,email,password,phonenumber,birthdate,gender} = req.body;
    const usr=new User({firstname,lastname,email,password,phonenumber,birthdate,gender});
    const cryptedpass= bcrypt.hashSync(usr.password, 12);
    usr.password=cryptedpass
    await usr.save();
    res.status(200).json({message:"you have just posted data"});
    } catch (error) {
        console.log(error);
    }
}
export function upadteUsers(req,res){
    res.status(200).json({message:"you have just updated data"});
}
export async function deleteUsers(req,res){
    try {
        const deletedusr = await User.findByIdAndDelete("6897180bb567cfb778d24481");
        res.status(200).json(deletedusr);
    } catch (error) {
        res.status(404).json({error:"delete request crashed"})
    }
}


