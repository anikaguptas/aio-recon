const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain NULL scan
    console.clear();
    console.log(chalk.cyan.bold('\n🚫 What is a NULL Scan?\n'));
    console.log(chalk.white(`A NULL Scan sends a TCP packet with NO flags set.`));
    console.log(chalk.white(`This is abnormal behavior — used to confuse firewalls and avoid detection.\n`));

    console.log(chalk.yellow.bold(`📜 Expected Behavior:\n`));
    console.log(chalk.yellow(`📌 CLOSED port → responds with RST`));
    console.log(chalk.yellow(`📌 OPEN port → ignores the packet (no response)\n`));
    console.log(chalk.blue(`✅ Works best on Unix/Linux systems that strictly follow RFC 793.`));
    console.log(chalk.red(`❌ Not reliable on Windows — may send RSTs even from open ports.\n`));

    console.log(chalk.green(`🕵️ Stealthy: Since it skips the usual TCP handshake, it's often used to avoid IDS/firewalls.`));
    console.log(chalk.gray(`Note: NULL = No flags in TCP header. Can be used in low-noise recon.\n`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run the NULL scan
    console.log(chalk.blue(`\n🚀 Launching NULL Scan (-sN) on ${target} [Top 1000 Ports]...\n`));
    const { stdout } = await run(`nmap -sN ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
