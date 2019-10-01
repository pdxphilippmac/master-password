const readline = require("readline");
const crypto = require("crypto");
const { readHash } = require("./createHash");
const fs = require("fs");

const { executeCommand } = require("./lib/commands");

const userArgv = process.argv.slice(2);
const [action, key, value] = userArgv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const masterPasswordHash = fs.readFileSync("hash.json", "utf-8");

rl.question("What is the master password?", password => {
  rl.output.write("\n"); //  \n gives one space " password"
  console.log(`Thank your for your password ${password}`);
  if (verifyHash(password, masterPasswordHash)) {
    executeCommand(password, action, key, value);
  } else {
    console.log("Invalid master password");
  }
  rl.close();
});
// Override default output to hide password with ****
rl._writeToOutput = function _writeToOutput() {
  rl.output.write("*");
};

// Checking the password hash
function verifyHash(password, original) {
  const originalHash = original.split("$")[1];
  const salt = original.split("$")[0];
  const hash = crypto
    .pbkdf2Sync(password, salt, 2048, 32, "sha512")
    .toString("hex");

  return hash === originalHash;
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
