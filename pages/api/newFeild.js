import { ObjectId } from "bson";
import { ConnectToDatabase } from "../../Mongodb/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const Object = req.body;
    const newObject = { [Object.Title]: Object.Description };
    try {
      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");
      const filter = { _id: new ObjectId("6549c572d69ae7aa4c95e477") };

      const update = {
        $push: {
          Content: newObject,
        },
      };

      const result = await db.collection("About").updateOne(filter, update);

      if (result.modifiedCount === 1) {
        console.log("Object inserted successfully");
        return res.status(200).json({ msg: "Object inserted successfully" });
      } else {
        console.log("Object not inserted");
        return res.status(400).json({ msg: "Object not inserted" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Couldn't connect to the database" });
    }
  }
}
