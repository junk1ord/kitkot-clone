const { createClient } = require("@astrajs/collections");

const collection = "tktkposts";

exports.handler = async function (event, context, callback) {
  // const astraClient = await createClient({
  //   astraDatabaseId: process.env.ASTRA_DB_ID,
  //   astraDatabaseRegion: process.env.ASTRA_DB_REGION,
  //   username: process.env.ASTRA_DB_USERNAME,
  //   password: process.env.ASTRA_DB_PASSWORD,
  // });

  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DB_ID,
    astraDatabaseRegion: process.env.ASTRA_DB_REGION,
    applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
  });

  const users = astraClient
    .namespace(process.env.ASTRA_DB_KEYSPACE)
    .collection(collection);

  try {
    const response = await users.find({});
    const res = response.data;
    return {
      statusCode: 200,
      body: JSON.stringify(Object.keys(res).map((i) => res[i])), // Object.keys(res).map((i) => res[i])
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(e),
    };
  }
};
