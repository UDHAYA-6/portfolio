import { MongoClient } from "mongodb";
const uri = process.env.MONGODB_URI;
let CachedClient = null;

async function ConnectToDatabase() {
  const client = new MongoClient(uri);
  try {
    CachedClient = client;
    return client;
  } catch {
    throw new Error(" Couldn't connect to mongodb");
  }
}

export { ConnectToDatabase };
