const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n OS Guessing - TCP/IP Stack Fingerprinting (Nmap -O --osscan-guess)\n'));
    console.log(chalk.white(`This identifies the operating system by analyzing how it responds to crafted TCP/IP packets.\n`));

    console.log(chalk.white(` How it works:`));
    console.log(chalk.white(`   - Sends special TCP, UDP, and ICMP packets with different flags/options.`));
    console.log(chalk.white(`   - Measures TTL, window size, response behavior.`));
    console.log(chalk.white(`   - Matches this "signature" against a database of known OS behaviors.`));
    console.log(chalk.white(`   - --osscan-guess allows Nmap to suggest a closest match if unsure.\n`));

    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: ' Enter target IP or domain:',
        validate: val => val.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    const cmd = `nmap -O --osscan-guess ${target}`;
    console.log(chalk.blue(`\n Guessing OS of ${target}...\n`));
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(`OS detection failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
