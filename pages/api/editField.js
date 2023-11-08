import { ObjectId } from "bson";
import { ConnectToDatabase } from "../../Mongodb/mongodb";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { id, Title, Description } = req.body;
    const updatedData = { [Title]: Description };
    try {
      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");
      const filter = { _id: new ObjectId("6549c572d69ae7aa4c95e477") };

      const doc = await db.collection("About").findOne(filter);

      if (!doc || !doc.Content[id]) {
        return res.status(404).json({ msg: "Object not found" });
      }

      doc.Content[id] = updatedData;

      const result = await db.collection("About").replaceOne(filter, doc);

      if (result.modifiedCount === 1) {
        console.log("Object edited successfully");
        return res.status(200).json({ msg: "Object edited successfully" });
      } else {
        console.log("Object not found or edited");
        return res.status(404).json({ msg: "Object not found or edited" });
      }
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ msg: "Couldn't connect to the database" });
    }
  }
}
