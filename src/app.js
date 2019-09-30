const readline = require("readline");

const { executeCommand } = require("./lib/commands");

const userArgv = process.argv.slice(2);
const [action, key, value] = userArgv;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const masterPassword = "abc";
rl.question("What is the master password?", password => {
  rl.output.write("\n"); //  \n gives one space " password"
  console.log(`Thank your for your password ${password}`);
  if (password === masterPassword) {
    executeCommand(action, key, value);
  } else {
    console.log("invalid password");
  }
  rl.close();
});
// Override default output to hide password with ****
rl._writeToOutput = function _writeToOutput() {
  rl.output.write("*");
};

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
