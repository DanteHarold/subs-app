import mongoose from "mongoose";

const { Schema } = mongoose;

const subSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellidoPaterno: {
    type: String,
    required: true,
  },
  apellidoMaterno: {
    type: String,
    required: true,
  },
  correo: {
    type: String,
    required: true,
  },
  terms: {
    type: Boolean,
    default: false,
  },
});

const Sub = mongoose.models.Sub || mongoose.model("Sub", subSchema);

export default Sub;
