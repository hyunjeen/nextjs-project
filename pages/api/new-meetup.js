import { MongoClient } from "mongodb";
// url : api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://hyunjeen:12344321@cluster0.3tzlcma.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    await client.close();

    res.status(201).json({
      message: "success",
    });
  }
}

export default handler;
