// export default async function Handler(req, res) {
/* Handling mongo db connection and date*/
// const cl = await ConnectToDatabase();
// const client = await cl.connect();
// const db = client.db("Portfolio");
// const collection = db.collection("feedback");
// const date = new Date();
// const dat = new Date(date);
// const year = dat.getFullYear();
// const month = String(dat.getMonth() + 1).padStart(2, "0");
// const day = String(dat.getDate()).padStart(2, "0");
// const formattedDate = `${day}-${month}-${year}`;
"use server";
/* ------POST request------ */
// if (req.method == "POST") {
//   const { Name, Email, Message } = req.body.FormData;
//   const result = await collection.insertOne({
//     Name,
//     Email,
//     Message,
//     Date: formattedDate,
//   });
//   console.log(result);
//   if (result.acknowledged) {
//     res.status(200).json({ msg: "message send successfully" });
//     client.close();
//   } else {
//     res.status(404).json({ msg: "Try after sometime" });
//     client.close();
//   }
/* ------GET request------ */
//   } else if (req.method == "GET") {
//     const data = await collection.find({}).toArray();
//     if (data) {
//       res.status(200).json(data);
//     } else {
//       res.status(404).json({ msg: "No sunch data found" });
//     }
//   } else {
//     res.status(405).json({ msg: "Invalid Request method" });
//   }
// }
import { ConnectToDatabase } from "@/mongodb/mongodb";
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
