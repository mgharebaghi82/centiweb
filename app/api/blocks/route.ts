import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);
client.connect();

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const db = client.db("Centichain");
    const collection = db.collection("Blocks");
    const number = await collection.countDocuments();

    return NextResponse.json({
      number: number,
    });
  } catch (e) {
    return NextResponse.json({
      number: 0,
    });
  }
}
