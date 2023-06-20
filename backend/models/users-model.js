import mongoose from "mongoose";

const newUserSchema = mongoose.Schema({
  email: { type: String, unique: true },
  fullName: String,
  password: String,
});

const NewUser = mongoose.model("allUsers", newUserSchema);

export default NewUser;
