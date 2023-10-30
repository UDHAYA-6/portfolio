import { ConnectToDatabase } from "../../Mongodb/mongodb";
import { ObjectId } from "bson";

export default async function handler(req, res) {
  if (req.method === "PUT") {
    const { Title, Description, id } = req.body;
    const projectIdToEdit = id;
    const newTitle = Title;
    const newDesc = Description;

    try {
      const client = await ConnectToDatabase();
      const db = client.db("Portfolio");

      const filter = { _id: new ObjectId("652d0fcf876bc55275b7131a") };

      const update = {
        $set: {
          "Projects.$[project].Title": newTitle,
          "Projects.$[project].Desc": newDesc,
        },
      };

      const options = {
        arrayFilters: [{ "project.id": new ObjectId(projectIdToEdit) }],
      };

      const result = await db
        .collection("About")
        .updateOne(filter, update, options);

      if (result.modifiedCount === 1) {
        res.status(200).json({ msg: "Project details updated successfully" });
      } else {
        res
          .status(404)
          .json({ msg: "Document not found or project not updated" });
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
