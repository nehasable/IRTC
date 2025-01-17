import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controller/User.js";
import { verifyAdmin, verifyUser } from "../verify/verifyToken.js";
const router = express.Router();

//UPDATE
router.put("/:id",  verifyUser, updateUser);

//DELETE
router.delete("/:id",verifyUser, deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/",verifyAdmin,  getUsers);                //to get list of all users you need admin access

export default router;
