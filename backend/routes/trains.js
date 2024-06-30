import express from "express"
import Trains from "../models/Trains.js"
import { createTrain, deleteTrain, getTrain, getTrains, updateTrain } from "../controller/Trains.js";

const router=express.Router()

//contains queries for train
//CREATE
router.post("/",createTrain)
//UPDATE
router.put("/:id",updateTrain)
//DELETE
router.delete("/:id",deleteTrain)

//GET
router.get("/:id",getTrain)
//DISPLAY ALL
router.get("",getTrains)
export default router;