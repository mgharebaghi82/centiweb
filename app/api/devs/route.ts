import { MongoClient, WithId } from "mongodb";
import { NextResponse } from "next/server";
import { Post } from "../types/types";

const uri = "mongodb://0.0.0.0:27017";
const client = new MongoClient(uri);

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    let data: Post[] = [];
    const db = client.db("centiweb");
    const collection = db.collection<WithId<Post>>("posts");
    const curosr = collection.find({ type: "dev" });

    await curosr.forEach((doc) => {
      data.push(doc);
    });

    return NextResponse.json({
      data: data,
    });
  } catch (e) {
    return NextResponse.json({
      data: [],
    });
  }
}
