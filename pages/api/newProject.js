import { ConnectToDatabase } from "../../Mongodb/mongodb";
import { ObjectId } from "bson";
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { Title, Description } = req.body;
    const newProject = {
      Title: Title,
      Desc: Description,
      id: new ObjectId(),
    };

    try {
      const client = await ConnectToDatabase();
      const db = client.db("Portfolio");

      const filter = { _id: new ObjectId("6549c572d69ae7aa4c95e477") };

      const update = {
        $push: { Projects: newProject },
      };

      const result = await db.collection("About").updateOne(filter, update);

      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "Project added successfully" });
      } else {
        res
          .status(404)
          .json({ msg: "Document not found or project not added" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: "Internal server error" });
    } finally {
      client.close();
    }
  } else {
    res.status(401).json({ msg: "Invalid request method" });
  }
}
