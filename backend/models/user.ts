import { Schema, model } from "mongoose"

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  login_code: { type: String, required: true, length: 6 },
  imageUrl: String,
  roles: {
    type: {
      admin: Boolean,
      seller: Boolean,
    },
    required: true,
  },
})

const UserModel = model("User", userSchema, "users")

export default UserModel

// new UserModel({
//   firstname: "Brian",
//   lastname: "Matozo",
//   email: "tomas@gmail.com",
//   login_code: "123456",
//   imageUrl: "https://i.pravatar.cc/300",
//   roles: {
//     admin: false,
//     seller: true,
//   },
// }).save()