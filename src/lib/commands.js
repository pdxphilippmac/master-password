const { readSecrets, writeSecrets } = require("./secrets");
const crypto = require("crypto");

function set(password, key, value) {
  const cryptoKey = crypto.createCipher("aes-128-cbc", password);
  let encryptedValue = cryptoKey.update(value, "utf8", "hex");
  encryptedValue += cryptoKey.final("hex");

  const secrets = readSecrets();
  secrets[key] = encryptedValue; // z.b pin: 1234
  writeSecrets(secrets);
}

function unset(key) {
  const unsetSecrets = readSecrets();
  delete unsetSecrets[key];
  writeSecrets(unsetSecrets);
}

function get(password, key) {
  const secrets = readSecrets();

  const secret = secrets[key];

  const cryptoKey = crypto.createDecipher("aes-128-cbc", password);
  let decryptedSecret = cryptoKey.update(secret, "hex", "utf8");
  decryptedSecret += cryptoKey.final("utf8");

  console.log(decryptedSecret);
}
// solution 1
const commands = {
  set,
  get,
  unset
};

exports.executeCommand = function executeCommand(password, action, key, value) {
  const command = commands[action];
  if (!command) {
    throw new Error("unknown action");
  }
  command(password, key, value);
};
