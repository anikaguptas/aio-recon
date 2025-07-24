const chalk = require('chalk');
const figlet = require('figlet');
const gradient = require('gradient-string');

async function showBanner() {
  console.clear();
  const title = figlet.textSync('AIO-RECON', {
    font: 'DOS Rebel',
    horizontalLayout: 'default',
    verticalLayout: 'default',
  });
  console.log(gradient.mind.multiline(title));
  console.log(chalk.blue('aio-recon is a powerful, modular, and interactive CLI-based cybersecurity reconnaissance toolkit built with Node.js. It allows security analysts, ethical hackers, and OSINT enthusiasts to perform a wide range of recon tasks — all from the terminal — with simple natural-language input.'))
  console.log(chalk.gray('----------------------------------------------'));
  console.log(chalk.bgRed.bold.cyan('USE ONLY AFTER PROPER CONSENT'));
  console.log(chalk.red(chalk.underline.bgBlue('SELECT YOUR CHOICE')));

}

module.exports = showBanner;
