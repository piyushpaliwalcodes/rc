import Subscribedusers from "@/app/models/Subscribedusers";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req:NextRequest){
    const {email} = await req.json();
    const subscribedusers = new Subscribedusers({email});
    await subscribedusers.save();
    return NextResponse.json({message:"User subscribed successfully"});
}


export async function GET(req:NextRequest){
    const subscribedusers = await Subscribedusers.find();
    return NextResponse.json(subscribedusers);
}


