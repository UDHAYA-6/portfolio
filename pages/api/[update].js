import { ConnectToDatabase } from "@/Mongodb/mongodb";
import { ObjectId } from "bson";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.data;
    const qry = req.query.update;
    try {
      const filter = { _id: new ObjectId("6549c572d69ae7aa4c95e477") };
      const update = { $set: { [qry]: data } };
      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");

      const result = await db.collection("About").updateOne(filter, update);

      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "updated successfully" });
      } else {
        res.status(404).json({ msg: "document not found or not updated" });
      }
      client.close();
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "internal server error" + error });
      client.close();
    }
  } else {
    res.status(401).json({ msg: "invalid" });
  }
}
