const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017/master-password";

// alternative schreibweise: function(err,db) {}, die folgende ist moderner:

// MongoClient.connect(
//   url,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (error, database) => {
//     if (error) {
//       throw error;
//     }
//     console.log("Database created");
//     const masterPasswordDb = database.db("master-password");
//     masterPasswordDb.createCollection("secrets", (error, result) => {
//       if (error) {
//         throw error;
//       }
//       console.log("Collection created!");
//       database.close();
//     });
//   }
// );

// alternative :function mit async/ await
let db = null;
async function initDatabase() {
  //Connection url:
  const url =
    "mongodb+srv://admin:neuefische@masterpassword-c3tl2.mongodb.net/admin?retryWrites=true&w=majority";
  // Database name:
  const dbName = "master-password";

  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  await client.connect();

  db = client.db(dbName);
}

async function getCollection(collectionName) {
  if (!db) {
    await initDatabase();
  }
  return db.collection(collectionName);
}

exports.initDatabase = initDatabase;
exports.getCollection = getCollection;
