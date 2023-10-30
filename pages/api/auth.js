import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { ConnectToDatabase } from "@/Mongodb/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return NextResponse.json(
          { error: "Email and password are required." },
          { status: 400 }
        );
      }

      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");
      const info = await db
        .collection("About")
        .findOne({ Email: email, Password: password });

      if (info) {
        const token = sign(
          { userId: 1, userEmail: email },
          process.env.JWT_SECRET,
          {
            expiresIn: "1m",
          }
        );

        return NextResponse.json({ token });
      } else {
        return NextResponse.json(
          { error: "Invalid email or password." },
          { status: 401 }
        );
      }
    } catch (error) {
      return NextResponse.json(
        { error: "An error occurred while processing your request." },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.error("Method Not Allowed", { status: 405 });
  }
}
