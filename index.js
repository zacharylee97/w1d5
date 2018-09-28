var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World");
message += " " + chalk.blue("Zachary");
message += " " + chalk.bold(chalk.bgCyan("Lee"));

console.log(message);