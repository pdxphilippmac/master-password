const fs = require("fs");
const { getCollection } = require("./database");

const fileName = "secrets.json";

async function readSecrets() {
  try {
    const secretsCollection = await getCollection("secrets");
    // Find secrets
    console.log(await secretsCollection.find({}).toArray());

    const secretsJSON = fs.readFileSync(fileName, "utf-8");
    const secrets = JSON.parse(secretsJSON);
    return secrets;
  } catch (error) {
    writeSecrets({});
    return {};
  }
}

function writeSecrets(secrets) {
  // Update secrets collection

  fs.writeFileSync(fileName, JSON.stringify(secrets));
}

exports.readSecrets = readSecrets;
exports.writeSecrets = writeSecrets;

// fs.appendFileSync write file without override
// oder flagen {flag: "a"}
