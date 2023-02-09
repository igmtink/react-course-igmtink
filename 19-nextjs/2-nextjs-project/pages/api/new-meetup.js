// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//
// // !(api/) a special folder, a special page for (Backend)

import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // !Accessing or Creating a (DataBase) on (MongoDB)
    const client = await MongoClient.connect(
      "mongodb+srv://admin-test:admintest@testdb.ugiukba.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    // !Creating a (Collection)
    const meetupsCollection = db.collection("meetups");

    // !Adding (Data) on (Collection)
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted!" });
  }
}
