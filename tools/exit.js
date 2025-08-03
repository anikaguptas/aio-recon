const chalk = require('chalk');
async function runfn() {

console.log(chalk.red("EXITING...."))
process.exit(1);
}
module.exports = {
  run: runfn
};
