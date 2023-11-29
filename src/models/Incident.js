import mongoose from "mongoose";

const { Schema, model } = mongoose;

const IncidentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  incidentType: {
    type: Schema.Types.ObjectId,
    ref: "IncidentType",
  },
  project: {
    type: Schema.Types.ObjectId,
    ref: "Project",
  },
  employee: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
  },
  status: {
    type: String,
  },
});

export const Incident = model("Incident", IncidentSchema);
