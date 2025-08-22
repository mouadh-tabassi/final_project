import express,{Router} from "express";
import { getlogin, postlogin } from "../controllers/Userslogin.js";
import verifytoken from "../midellwares/verifytoken.js";
const router=express.Router();
router.post("/",postlogin);
router.get("/",verifytoken,getlogin);
export default router;
