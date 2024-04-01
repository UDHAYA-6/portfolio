"use server";
import { ConnectToDatabase } from "@/mongoDB/mongodb";
import { NextResponse } from "next/server";
const cl = await ConnectToDatabase();
const client = await cl.connect();
const db = client.db("Portfolio");
const collection = db.collection("feedback");
const date = new Date();
const dat = new Date(date);
const year = dat.getFullYear();
const month = String(dat.getMonth() + 1).padStart(2, "0");
const day = String(dat.getDate()).padStart(2, "0");
const formattedDate = `${day}-${month}-${year}`;
export async function POST(req) {
  const data = await req.json();
  const { Name, Email, Message } = data;
  console.log({ Name, Email, Message });
  const result = await collection.insertOne({
    Name,
    Email,
    Message,
    Date: formattedDate,
  });
  console.log(result);
  if (result.acknowledged) {
    return NextResponse.json({ msg: "Message sent successfully" });
  } else {
    return NextResponse.json({ msg: "Try again later" });
  }
}

export async function GET() {
  const data = await collection.find({}).toArray();
  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ msg: "No such data found" });
  }
}
