import mongoose, { SchemaType } from "mongoose";

const { Schema, model } = mongoose;

const ProjectSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  area: {
    type: String,
  },
  startedAt: {
    type: Date,
  },
  status: {
    type: String,
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
  },
});

export const Project = model("Project", ProjectSchema);
