// queries.js
const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "plp_bookstore";

async function runQueries() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const books = db.collection("books");

    // 1. Find all books
    const allBooks = await books.find({}).toArray();
    console.log("\n All Books:");
    console.log(allBooks);

    // 2. Find books by George Orwell
    const orwellBooks = await books.find({ author: "George Orwell" }).toArray();
    console.log("\n Books by George Orwell:");
    console.log(orwellBooks);

    // 3. Find books published after 1950
    const recentBooks = await books.find({ year: { $gt: 1950 } }).toArray();
    console.log("\n Books published after 1950:");
    console.log(recentBooks);

    // 4. Update one book
    await books.updateOne(
      { title: "1984" },
      { $set: { price: 12.99 } }
    );
    console.log("\n Updated price of '1984'");

    // 5. Delete one book
    await books.deleteOne({ title: "Moby Dick" });
    console.log("\n Deleted 'Moby Dick'");

  } catch (err) {
    console.error(" Error:", err);
  } finally {
    await client.close();
    console.log("\n Connection closed");
  }
}

runQueries();
