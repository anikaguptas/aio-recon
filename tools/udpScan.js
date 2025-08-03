const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain what UDP Scan does
    console.clear();
    console.log(chalk.cyan.bold('\n📡 Understanding UDP Port Scan\n'));
    console.log(chalk.white(`👉 UDP (User Datagram Protocol) is connectionless — no handshake like TCP.`));
    console.log(chalk.white(`👉 Nmap sends UDP packets to ports and waits for responses.`));
    console.log(chalk.white(`   - No response could mean the port is OPEN or FILTERED.`));
    console.log(chalk.white(`   - "Port unreachable" ICMP message = CLOSED.`));
    console.log(chalk.yellow(`⚠️  Limitations of UDP Scanning:`));
    console.log(chalk.yellow(`   - Slow: Each port must wait for a timeout.`));
    console.log(chalk.yellow(`   - High rate of false negatives (open ports might appear closed).`));
    console.log(chalk.yellow(`   - Firewalls may silently drop UDP packets.\n`));

    // Step 2: Ask for the target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter IP or domain to scan for UDP ports:',
        validate: input => input.trim() !== '' || 'Target cannot be empty',
      }
    ]);

    // Step 3: Run the UDP scan
    console.log(chalk.blue(`\n🔎 Scanning top 1000 UDP ports on ${target} using -sU...\n`));
    const { stdout } = await run(`nmap -sU ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ UDP Port Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
