const fs = require("fs");

const fileName = "secrets.json";

function readSecrets() {
  try {
    const secretsJSON = fs.readFileSync(fileName, "utf-8");
    const secrets = JSON.parse(secretsJSON);
    return secrets;
  } catch (error) {
    writeSecrets({});
    return {};
  }
}

function writeSecrets(secrets) {
  fs.writeFileSync("secrets.json", JSON.stringify(secrets));

  console.log("Write secrets", secrets);
}

exports.readSecrets = readSecrets;
exports.writeSecrets = writeSecrets;
