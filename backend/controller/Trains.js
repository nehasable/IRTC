import Trains from "../models/Trains.js"
//Mongo methods for GET
export const createTrain = async (req, res, next) => {
    const newTrain = new Trains(req.body);
  
    try {
      const savedTrain = await newTrain.save();
      res.status(200).json(savedTrain);
    } catch (err) {
      next(err);
    }
  };
  //UPDATE
  export const updateTrain = async (req, res, next) => {
    try {
      const updatedTrains = await Trains.findByIdAndUpdate(
        req.params.id,                                                //id as parameter
        { $set: req.body },                
        { new: true }                                                //display change as new schema
      );
      res.status(200).json(updatedTrains);
    } catch (err) {
      next(err);
    }
  };
  //DELETE
  export const deleteTrain = async (req, res, next) => {
    try {
      await Trains.findByIdAndDelete(req.params.id);                                  //id as parameter
      res.status(200).json("Train has been deleted.");
    } catch (err) {
      next(err);
    }
  };
  //GET
  export const getTrain = async (req, res, next) => {
    try {
      const train = await Trains.findById(req.params.id);                     //id as parameter
      res.status(200).json(train);
    } catch (err) {
      next(err);
    }
  };
  //GET ALL
  export const getTrains = async (req, res, next) => {

    try {
      const trains = await Trains.find();
      res.status(200).json(trains);                      //no parameter
    } catch (err) {
      next(err);
    }
  };