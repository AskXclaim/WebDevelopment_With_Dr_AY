"use strict";
const { MongoClient } = require("mongodb");

const isNullOrEmpty = (value) => {
  return !value || (typeof value === "string" && value.trim().length === 0);
};

const sortError = (error) => {
  console.log(`The following error occurred:${error.message}`);
  throw `${error.message}`;
};

const connectToCollection = (value) => {
  value.client = new MongoClient(value.url, { useNewUrlParser: true });
  const database = value.client.db(value.dbName);
  const fruitsCollection = database.collection(value.collectionName);
  return { client: value.client, fruitsCollection: fruitsCollection };
};

const insertItems = async (value) => {
  let client = null;
  try {
    if (
      !value ||
      value.items === undefined ||
      (value.url === undefined) | (value.dbName === undefined) ||
      value.collectionName === undefined
    )
      throw "Invalid value object supplied";

    const connection = connectToCollection({
      client: client,
      url: value.url,
      dbName: value.dbName,
      collectionName: value.collectionName,
    });
    // client = new MongoClient(value.url, { useNewUrlParser: true });
    // const database = client.db(value.dbName);
    // const fruitsCollection = database.collection(value.collectionName);
    const result = await connection.fruitsCollection.insertMany(value.items);

    console.log(result);
    client = connection.client;
  } catch (error) {
    sortError(error);
  } finally {
    if (client) await client.close();
  }
};

const findAll = async (value) => {
  let client = null;
  try {
    if (
      !value ||
      (value.url === undefined) | (value.dbName === undefined) ||
      value.collectionName === undefined
    )
      throw "Invalid value object supplied";

    const connection = connectToCollection({
      client: client,
      url: value.url,
      dbName: value.dbName,
      collectionName: value.collectionName,
    });

    const query = { score: { $gt: 5 } };
    const options = {
      // sort returned documents in ascending order by title (A->Z)
      sort: { name: 1 },
      // Include only some properties
      projection: { _id: 0, name: 1, score: 1, review: 1 },
    };

    let count = await connection.fruitsCollection.estimatedDocumentCount();

    if (count === 0) {
      console.log("No records found!");
    } else {
      const cursor = connection.fruitsCollection.find(query, options);
      await cursor.forEach((item) => console.log(item));
    }

    client = connection.client;
  } catch (error) {
    sortError(error);
  } finally {
    if (client) await client.close();
  }
};

module.exports = {
  isNullOrEmpty,
  sortError,
  insertItems,
  findAll,
};
