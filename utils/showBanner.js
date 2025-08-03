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
  console.log(chalk.yellow('Aio-recon is a powerful and interactive CLI-based cybersecurity reconnaissance toolkit built with Node.js. Whether you’re a student, beginner developer or seasoned professional, educate yourself first and then explore and perform recon the right way, all from your terminal.'));
}

module.exports = showBanner;
