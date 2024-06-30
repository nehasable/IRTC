import express from "express"
import Trains from "../models/Trains.js"
import { createTrain, deleteTrain, getTrain, getTrains, updateTrain } from "../controller/Trains.js";
import { verifyAdmin } from "../verify/verifyToken.js";
const router=express.Router()

    //contains queries for train
//CREATE
router.post("/",verifyAdmin, createTrain)              //only admin can change tranis
//UPDATE
router.put("/:id",verifyAdmin,updateTrain)
//DELETE
router.delete("/:id",verifyAdmin,deleteTrain)

//GET
router.get("/",async(req,res)=>{
    console.log(req)
    console.log(req.query)
    try {
        const trains = await Trains.find();
        res.status(200).json(trains);                     
      } catch (err) {
        next(err);
      }
      
})

router.get("/:id",getTrain)
//DISPLAY ALL
// router.get("/",getTrains)

export default router;