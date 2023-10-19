"use strict";

const usingMongo = require("./usingMongo");

const url = "mongodb://localhost:27017";
const dbName = "fruitDb";
const items = [
  { name: "Banana", score: 5, review: "Maybe I am not so into bananas" },
  { name: "Apple", score: 6, review: "They are friendly and not heavy" },
  { name: "Juice Apple", score: 6, review: "Now, that's a really sweet fruit" },
];
async function run() {
  try {
    const mongoDbDetail = {
      url: url,
      dbName: dbName,
      collectionName: "fruits",
    };
    // //   inserting items
    // mongoDetail.items = items;
    // await usingMongo.insertItems(mongoDbDetail);

    await usingMongo.findAll(mongoDbDetail);
  } catch (error) {
    usingMongo.sortError(error);
  }
}

run().catch();
