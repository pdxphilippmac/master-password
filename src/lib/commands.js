const { readSecrets, writeSecrets } = require("./secrets");

function set(key, value) {
  const secrets = readSecrets();
  secrets[key] = value; // z.b pin: 1234
  writeSecrets(secrets);
}

function unset(key) {
  const unsetSecrets = readSecrets();
  delete unsetSecrets[key];
  writeSecrets(unsetSecrets);
}

function get(key) {
  const secrets = readSecrets();

  const secret = secrets[key];
  console.log(secret);
}
// solution 1

exports.executeCommand = function executeCommand(action, key, value) {
  switch (action) {
    case "get":
      get(key);
      break;
    case "set":
      set(key, value);
      break;
    case "unset":
      unset(key);
      break;
  }
};
