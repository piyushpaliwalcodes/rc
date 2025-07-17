import mongoose from "mongoose";

const UserdataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
});

export default mongoose.models.Userdata || mongoose.model("Userdata", UserdataSchema);