import mongoose from "mongoose";
const { Schema, model } = mongoose;

const IncidentTypeSchema = new Schema({
  _id: Schema.Types.ObjectId,
  description: {
    type: String,
    required: true,
  },
});

export const IncidentType = model("IncidentType", IncidentTypeSchema);
