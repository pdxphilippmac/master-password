const crypto = require("crypto");
const fs = require("fs");

const hashFileName = "hash.json";

function hashPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto
    .pbkdf2Sync(password, salt, 2048, 32, "sha512")
    .toString("hex");
  fs.writeFileSync(hashFileName, JSON.stringify(hash));
  return [salt, hash].join("$");
}

console.log(hashPassword(process.argv[2]));

function readHash() {
  const hashJSON = fs.readFileSync(hashFileName, "utf-8");
  const hash = JSON.parse(hashJSON);
  return hash;
}

function writeHash(hash) {
  fs.writeFileSync(hashFileName, JSON.stringify(hash));
}

exports.readHash = readHash;
exports.writeHash = writeHash;
