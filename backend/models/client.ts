import { Schema, model } from "mongoose"

const clientSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneCode: { type: String },
  phoneNumber: { type: String },
  document_type: { type: String, required: true },
  document_value: { type: String, required: true },
  searchField: { type: String, required: true },
  comissions: Number,
  sales: {
    count: Number,
    amount: Number,
  },
})
const ClientModel = model("Client", clientSchema, "clients")
export default ClientModel

// new ClientModel({
//   firstname: "Tomas",
//   lastname: "Matozo",
//   email: "brian@gmail.com",
//   phoneCode: "+54",
//   phoneNumber: "123456789",
//   document_type: "Cedula",
//   document_value: "12345678",
//   searchField: "12345678",
//   comissions: 0,
//   sales: {
//     count: 0,
//     amount: 0,
//   },}).save()