import { MongoClient } from "mongodb";
const URI =
  "mongodb+srv://spotifyUser:spotifyUser$123@cluster0.qfyylgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);
export const db = client.db("spotifyAula");
//const songCollection = await db.collection("songs").find({}).toArray();
// const artistCollection = db.collection("artists").find({}).toArray();
//console.log(songCollection);
