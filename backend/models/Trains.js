import mongoose from "mongoose";
// import { Schema } from "mongoose";

const TrainSchema=new mongoose.Schema({
    trainName: {
        type: String,
        required: true,
      },
      departureTime: {
        type: String,
        required: true,
      },
      arrivalTime: {
        type: String,
        required: true,
      },
      departureStation: {
        type: String,
        required: true,
      },
      arrivalStation: {
        type: String,
        required: true,
      },
      classes: {
        sleeper: {
          type: Boolean,
          required: true,
          default: false,
        },
        ac2Tier: {
          type: Boolean,
          required: true,
          default: false,
        },
        firstClass: {
          type: Boolean,
          required: true,
          default: false
        }
      },


})
export default mongoose.model("Trains",TrainSchema)         //model,schema