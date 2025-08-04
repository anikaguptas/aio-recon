const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain what a FIN Scan is
    console.clear();
    console.log(chalk.cyan.bold('\n What is a FIN Scan?\n'));
    console.log(chalk.white(`A FIN Scan (Nmap: -sF) sends a TCP packet with just the FIN flag set.`));
    console.log(chalk.white(`It's used to probe target ports stealthily by avoiding the normal 3-way handshake.\n`));
    console.log(chalk.white(`How it works:`));
    console.log(chalk.white(`   🔹 Sends a FIN packet to a target port`));
    console.log(chalk.white(`   🔹 If port is CLOSED → Target responds with RST`));
    console.log(chalk.white(`   🔹 If port is OPEN → No response (per RFC 793)\n`));
    console.log(chalk.green(` Stealthy: Often evades stateless firewalls and basic IDS.`));
    
    console.log(chalk.yellow.bold(`\n RFC 793 Behavior:\n`));
    console.log(chalk.yellow(` If a CLOSED port receives a FIN → it sends a RST.`));
    console.log(chalk.yellow(` If an OPEN port receives a FIN → it sends NOTHING.`));
    console.log(chalk.yellow(` FIN scan logic:`));
    console.log(chalk.yellow(`     - RST received  → port is CLOSED`));
    console.log(chalk.yellow(`     - No response   → port is possibly OPEN\n`));
    console.log(chalk.blue(` Most UNIX/Linux systems follow RFC 793 strictly.`));
    console.log(chalk.red(` Windows usually replies with RST for all ports — making FIN scan unreliable.\n`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run the FIN scan
    console.log(chalk.blue(`\n Launching FIN Scan (-sF) on ${target} [Top 1000 Ports]...\n`));
    const { stdout } = await run(`nmap -sF ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(` Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
