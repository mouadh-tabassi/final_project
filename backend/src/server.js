import express from "express";
import cors from "cors"
import User from "../models/User.js";
import'../config/connect.js';
import UsersRouter from "./routes/UsersRouter.js"
import LoginRouter from"./routes/LoginRouter.js"
const app=express();
app.use(express.json({
    origin:"http://localhost:5173",
}));
app.use(cors());
app.use("/Registration",UsersRouter);
app.use("/Login",LoginRouter)
const port=5000;
app.listen(port,()=>{
    console.log("running on port:",port);
})