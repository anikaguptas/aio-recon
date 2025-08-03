const chalk = require('chalk');

function ensureSudo() {
  if (process.getuid && process.getuid() !== 0) {
    console.log(chalk.red.bold('\n🚫 Permission Denied! : ') + chalk.gray('This tool requires elevated privileges to run certain operations') );
    console.log(chalk.cyan('\n Try running :  ') + chalk.green.bold('sudo aio-recon'));
    process.exit(1);
  }
}

module.exports = ensureSudo;
