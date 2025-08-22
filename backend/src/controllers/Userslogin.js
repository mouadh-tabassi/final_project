import User from "../../models/User.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
export async function postlogin(req,res){
    const {emailacc,passwordacc}=req.body
    const user=await User.findOne({email:emailacc})
    try {
        if(user){
            const validPass=bcrypt.compareSync(passwordacc,user.password)
            if(validPass){
            const payload= {
                firstname:user.firstname,
                lastname:user.lastname,
                email:user.email,
            }
            const token= jwt.sign(payload,'1234567',{ expiresIn: "1h" })
            res.status(200).json({token});
        }
            else{
                res.status(401).send({message:"your password is incorrect"});
            }
        }
        else{
            res.status(401).send({message:"utilisateur inexistant"});
        }
    }
catch (error) {
    res.status(500).send(error);   
    }
}
export function getlogin(req,res){
     res.json({ loggedIn: true, user: req.user })
}
