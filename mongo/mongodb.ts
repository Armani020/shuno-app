import { MongoClient } from "mongodb";
import { Consumption, Shuno } from "./models/shuno";

const uri = process.env.MONGO_URL || "mongodb://localhost:27017";

const client = new MongoClient(uri);

client.connect();

const db = client.db(process.env.DB_NAME || "shuno-app");
const shunoCol = db.collection<Shuno>("shuno");
const consumptionCol = db.collection<Consumption>("consumption");

export { db, shunoCol, consumptionCol };
