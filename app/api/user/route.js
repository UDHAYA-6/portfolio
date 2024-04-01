// "use server";
// import { ConnectToDatabase } from "@/mongodb/mongodb";
// import { NextResponse } from "next/server";
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
// export async function POST(req) {
//   const data = await req.json();
//   const { Name, Email, Message } = data;
//   console.log({ Name, Email, Message });
//   const result = await collection.insertOne({
//     Name,
//     Email,
//     Message,
//     Date: formattedDate,
//   });
//   console.log(result);
//   if (result.acknowledged) {
//     return NextResponse.json({ msg: "Message sent successfully" });
//   } else {
//     return NextResponse.json({ msg: "Try again later" });
//   }
// }

// export async function GET() {
//   const data = await collection.find({}).toArray();
//   if (data) {
//     return NextResponse.json(data);
//   } else {
//     return NextResponse.json({ msg: "No such data found" });
//   }
// }

"use server";
import { ConnectToDatabase } from "@/mongodb/mongodb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const cl = await ConnectToDatabase();
    const client = await cl.connect();
    const db = client.db("Portfolio");
    const collection = db.collection("feedback");

    const { Name, Email, Message } = await req.json();
    console.log({ Name, Email, Message });

    const date = new Date();
    const formattedDate = `${date.getDate()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()}`;

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
  } catch (error) {
    console.error("Error processing POST request:", error);
    return NextResponse.error({
      status: 500,
      message: "Internal server error",
    });
  }
}

export async function GET() {
  try {
    const cl = await ConnectToDatabase();
    const client = await cl.connect();
    const db = client.db("Portfolio");
    const collection = db.collection("feedback");

    const data = await collection.find({}).toArray();
    if (data) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json({ msg: "No data found" });
    }
  } catch (error) {
    console.error("Error processing GET request:", error);
    return NextResponse.error({
      status: 500,
      message: "Internal server error",
    });
  }
}
