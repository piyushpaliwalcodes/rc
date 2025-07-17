import mongoose from "mongoose";

const SubscribedusersSchema = new mongoose.Schema({
    email:String,
})

const Subscribedusers = mongoose.models.Subscribedusers || mongoose.model("Subscribedusers",SubscribedusersSchema);

export default Subscribedusers;