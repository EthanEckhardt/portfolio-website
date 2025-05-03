import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("portfolio");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
}

export async function GET() {
  const db = await connectToDatabase();
  try {
    const collections = await db.listCollections().toArray();
    const allData: Record<string, unknown[]> = {};

    for (const collection of collections) {
      const collectionName = collection.name;
      const data = await db.collection(collectionName).find({}).toArray();
      allData[collectionName] = data;
    }

    return new Response(JSON.stringify(allData), {
      status: 200,
    });
  } catch (error) {
    console.error("Failed to fetch data from collections", error);
    return new Response("Failed to fetch data from collections", {
      status: 500,
    });
  }
}
