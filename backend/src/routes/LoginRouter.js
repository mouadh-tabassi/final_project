import express,{Router} from "express";
import { postlogin } from "../controllers/Userslogin.js";
const router=express.Router();
router.post("/",postlogin);
export default router;
