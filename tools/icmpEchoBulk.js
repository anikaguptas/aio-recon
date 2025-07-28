const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();

    // Step 1: Educate user about ICMP Echo Request in Bulk
    console.log(chalk.cyan.bold('\n🌐 Bulk ICMP Echo Request (Ping Sweep)\n'));
    console.log(chalk.white(`👉 ICMP Echo Requests are used to discover which hosts are alive in a subnet.`));
    console.log(chalk.white(`👉 We'll send Echo Requests to each IP in the given subnet using tools like fping.`));
    console.log(chalk.yellow(`⚠️  Limitations:`));
    console.log(chalk.yellow(`   - Firewalls may block ICMP requests.`));
    console.log(chalk.yellow(`   - Some hosts may intentionally not respond to ping.`));
    console.log(chalk.yellow(`   - This only checks if a host is up — it doesn’t scan for ports or services.\n`));

    // Step 2: Prompt user for subnet
    const { subnet } = await inquirer.prompt([
      {
        type: 'input',
        name: 'subnet',
        message: '🌐 Enter subnet (CIDR format, e.g., 192.168.1.0/24):'
      },
    ]);

    // Step 3: Run fping command
    console.log(chalk.blue(`\n📡 Scanning subnet ${subnet} for live hosts using ICMP Echo Request...\n`));
    const { stdout } = await run(`nmap -sn -PE ${subnet}`);
    console.log(chalk.green.bold('✅ Live Hosts Found:\n'));
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(err.message));
  }
}

module.exports = {
  run: runfn
};
