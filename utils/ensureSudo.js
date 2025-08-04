const chalk = require('chalk');

function ensureSudo() {
  if (process.getuid && process.getuid() !== 0) {
    console.log(chalk.red.bold('\n Permission Denied!'));
    console.log(chalk.yellow(' Try running :  ') + chalk.yellow.bold('sudo aio-recon'));
    process.exit(1);
  }
}

module.exports = ensureSudo;
