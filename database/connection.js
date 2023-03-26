const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

const insertDb = async (data) => {
  try {
    await client.connect();
    const database = client.db("student");
    const collection = database.collection("information");
    const dbupdate = await collection.insertOne(data);
    await client.close();
    return dbupdate;
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const findDb = async (query) => {
  try {
    await client.connect();
    const database = client.db("student");
    const collection = database.collection("information");
    const dbupdate = await collection.find(query).toArray();
    await client.close();
    return dbupdate;
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const updateDb = async (filter, value) => {
  try {
    await client.connect();
    const database = client.db("student");
    const collection = database.collection("information");
    const dbUpdate = await collection.updateMany(filter, value);
    await client.close();
    return dbUpdate;
  } catch (error) {
    console.log(error.message);
  }
};

const deletedb = async (condition) => {
  try {
    await client.connect();
    const database = client.db("student");
    const collection = database.collection("information");
    const dbUpdate = await collection.deleteOne(condition);
    await client.close();
    return dbUpdate;
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = { insertDb, findDb, updateDb, deletedb };
