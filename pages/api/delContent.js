import { ObjectId } from "bson";
import { ConnectToDatabase } from "../../Mongodb/mongodb";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");
      const filter = { _id: new ObjectId("6549c572d69ae7aa4c95e477") };

      const update = {
        $pull: {
          Content: req.body,
        },
      };

      const result = await db.collection("About").updateOne(filter, update);

      if (result.modifiedCount === 1) {
        console.log("Object removed successfully");
        return res.status(200).json({ msg: "Object removed successfully" });
      } else {
        console.log("Object not found or removed");
        return res.status(404).json({ msg: "Object not found or removed" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Couldn't connect to the database" });
    }
  }
}

// I'm delighted to have been granted an internship with IDP, a well-known industry leader in IELTS. This one-year internship will run concurrently with my final year of study and will serve as the ideal link between academics and the professional world. I am eager to learn from IDP's outstanding employees, apply my theoretical knowledge to real-world issues, and contribute to the company's success
