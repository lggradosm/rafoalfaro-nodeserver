import mongoose from "mongoose";

const { Schema, model } = mongoose;

const CustomerSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
  },
  address: {
    type: String,
  },
});

export const Customer = model("Customer", CustomerSchema);
