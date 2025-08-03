const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Clear and explain what a TCP Connect Scan is
    console.clear();
    console.log(chalk.cyan.bold('\n🔌 What is a TCP Connect Scan?\n'));
    console.log(chalk.white(`A TCP Connect Scan (Nmap: -sT) is the most basic type of port scanning.`));
    console.log(chalk.white(`It uses the full TCP 3-way handshake to detect if a port is open:\n`));
    console.log(chalk.white(`   1️⃣  Sends a SYN packet to the target port`));
    console.log(chalk.white(`   2️⃣  If the port is OPEN, the target replies with a SYN-ACK`));
    console.log(chalk.white(`   3️⃣  Your system sends an ACK to complete the handshake`));
    console.log(chalk.white(`   4️⃣  (Immediately followed by a RST to close the connection)\n`));
    console.log(chalk.green(`✅ Works without root access — because it uses your OS to make real TCP connections.`));
    console.log(chalk.yellow(`⚠️  Drawbacks:`));
    console.log(chalk.yellow(`   - Noisy: Can be easily logged by firewalls and IDS`));
    console.log(chalk.yellow(`   - Not stealthy: Appears like real traffic`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run scan
    console.log(chalk.blue(`\n🚀 Launching TCP Connect Scan (-sT) on ${target} [Top 1000 Ports]...\n`));
    const { stdout } = await run(`nmap -sT ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
