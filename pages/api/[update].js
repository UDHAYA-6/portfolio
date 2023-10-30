import { ConnectToDatabase } from "@/Mongodb/mongodb";
import { ObjectId } from "bson";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body.data;
    const qry = req.query.update;

    try {
      const filter = { _id: new ObjectId("652d0fcf876bc55275b7131a") };
      const update = { $set: { [qry]: data } };
      const client = await ConnectToDatabase();
      const db = client.db("Portfolio");

      const result = await db.collection("About").updateOne(filter, update);

      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "updated successfully" });
      } else {
        res.status(404).json({ msg: "document not found or not updated" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "internal server error" + error });
    } finally {
      client.close();
    }
  } else {
    res.status(401).json({ msg: "invalid" });
  }
}
