import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI as string;
const options = {};

if (!uri) {
  throw new Error("definir MONGODB_URI en .env.local");
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!(global as any)._mongoClient) {
    (global as any)._mongoClient = new MongoClient(uri, options);
  }
  clientPromise = (global as any)._mongoClient.connect();
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;