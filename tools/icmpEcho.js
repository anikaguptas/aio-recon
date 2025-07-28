const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Educate user about ICMP Echo Request
    console.clear();
    console.log(chalk.cyan.bold('\n🌐 Understanding ICMP Echo Request (Ping)\n'));
    console.log(chalk.white(`👉 ICMP (Internet Control Message Protocol) Echo Request is used to check if a host is reachable over the network.`));
    console.log(chalk.white(`👉 When you 'ping' a host, your system sends an ICMP Echo Request packet.`));
    console.log(chalk.white(`👉 If the target is online and responsive, it sends back an ICMP Echo Reply.`));
    console.log(chalk.yellow(`⚠️  Limitations:`));
    console.log(chalk.yellow(`   - Firewalls may block ICMP packets (especially Echo Requests).`));
    console.log(chalk.yellow(`   - Some servers disable ping responses to avoid DDoS or scans.`));
    console.log(chalk.yellow(`   - ICMP doesn't tell you which port is open — it's just a liveness check.\n`));

    // Step 2: Prompt user for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter IP or domain to send ICMP Echo Request (ping):',
        validate: input => input.trim() !== '' || 'Target cannot be empty',
      },
    ]);

    // Step 3: Run ping command
    console.log(chalk.blue(`\n📡 Sending ICMP Echo Request to ${target}...\n`));
    const { stdout } = await run(`ping -c 4 ${target}`);
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(`❌ Ping failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
