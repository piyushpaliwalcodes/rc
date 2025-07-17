import { NextRequest, NextResponse } from "next/server";
import Userdata from "../models/Userdata";
import mongoose from "mongoose";

// Utility to connect to MongoDB (prevents multiple connections in dev)
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  console.log(process.env.MONGODB_URI,"THIS IS THE MONGODB URI");
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, email, phone, message } = await req.json();
    const userdata = new Userdata({ firstName, lastName, email, phone, message });
    await userdata.save();
    return NextResponse.json({ message: "User data saved successfully" });
  } catch (err) {
    console.log("POST error:", err);
    return NextResponse.json({ error: "Failed to save user data" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const userdata = await Userdata.find();
    return NextResponse.json(userdata);
  } catch (err) {
    console.log("GET error:", err);
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}
