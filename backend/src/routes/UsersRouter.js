import express, { Router } from "express";
import { deleteUsers, getUsers, postUsers, upadteUsers } from "../controllers/UsersController.js";

const router = express.Router();
router.get("/",getUsers);
router.post("/",postUsers);
router.put("/:id",upadteUsers);
router.delete("/:id",deleteUsers);
export default router;