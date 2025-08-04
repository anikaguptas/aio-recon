const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Briefly explain XMAS scan
    console.clear();
    console.log(chalk.cyan.bold('\n🎄 XMAS Scan Overview:\n'));
    console.log(chalk.white(`Sends TCP packets with FIN, PSH, and URG flags — looks "lit up" like a Christmas tree.`));
    console.log(chalk.white(`Used to detect open ports stealthily without a full TCP handshake.\n`));

    console.log(chalk.yellow.bold(' How it works:\n'));
    console.log(chalk.yellow(` Closed port → responds with RST`));
    console.log(chalk.yellow(` Open port → no response (ignored)\n`));

    console.log(chalk.blue(` Unix/Linux: Usually follow this behavior → good stealth detection.`));
    console.log(chalk.red(` Windows: Often sends RST for all → may break XMAS scan detection.\n`));

    console.log(chalk.gray(`⚠️ Firewalls may drop these odd packets. Best used for stealthy recon.\n`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: ' Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run the XMAS scan
    console.log(chalk.blue(`\n Running XMAS Scan (-sX) on ${target}...\n`));
    const { stdout } = await run(`nmap -sX ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(` Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
