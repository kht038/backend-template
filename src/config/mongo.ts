import { MongoClient } from 'mongodb';

interface Imongo {
  url: string,
  db: string,
}

const initMongo = async (mongoConfig: Imongo) => {
  const client = new MongoClient(mongoConfig.url);
  await client.connect();

  client.db(mongoConfig.db);

  console.log('Mongo DB initialized.');

  return {
    client,
    db: client.db,
  };
};

export default initMongo;
