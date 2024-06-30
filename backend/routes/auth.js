import express from "express"
import { login, register } from "../controller/Auth.js";
const router=express.Router()

//post
router.post("/register",register)
router.post("/login",login)

export default router;        //default fn can be imported 