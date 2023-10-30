import { ConnectToDatabase } from "../../Mongodb/mongodb";
export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const cl = await ConnectToDatabase();
      const client = await cl.connect();
      const db = client.db("Portfolio");
      const data = await db.collection("About").find({}).toArray();
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(405).json({ msg: "no data is fetched" });
      }
      client.close();
    } catch {
      res.status(401).json({ msg: "No internet connection" });
    }
  } else {
    res.status(404).json({ msg: "invalid request" });
  }
}
