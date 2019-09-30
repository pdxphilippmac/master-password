const { readSecrets, writeSecrets } = require("./models/secrets");

const userArgv = process.argv.slice(2);
const [action, key, value] = userArgv;

function set(key, value) {
  const newSecrets = {
    [key]: value // z.b pin: 1234
  };
  writeSecrets(newSecrets);
}

function unset(key) {
  delete console.log("unset", key);
}

function get(key) {
  const secrets = readSecrets();
  console.log("get", key);
  const secret = secrets[key];
  console.log(secret);
}
// solution 1
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

// solution 2

// function perform () {
//   if (action=== "set") {
//     set(key, value);
//   } else if (action === "unset") {
//     unset(key);
//   } else if ( action === "get") {
//     get(key)

//   } else {
//     throw new Error ("unknown action")
//   }

// }
// perform();

//solution 3

// const commands = {
//   set,
//   get,
//   unset
// };
// const command = commands[action];
// if (!command) {
//   throw new Error ("unknown action"):
// }
// command(key, value)
