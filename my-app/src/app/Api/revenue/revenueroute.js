import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);
const dbName = "local";  
const collectionName = "myData"; 
const connectToDB = async () => {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db.collection(collectionName); 
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw new Error("Unable to connect to database");
  }
};

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" }); 
  }

  try {
    const collection = await connectToDB();

    const revenueData = await collection.findOne({ dashboard: "Revenue Dashboard" });

    if (!revenueData) {
      return res.status(404).json({ error: "Revenue data not found" });
    }

    res.status(200).json(revenueData);
  } catch (error) {
    console.error("Error fetching revenue data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  } finally {
    await client.close(); 
  }
};

export default handler;

