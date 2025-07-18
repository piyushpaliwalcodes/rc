import mongoose from "mongoose";

const UserdataSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Userdata || mongoose.model("Userdata", UserdataSchema);