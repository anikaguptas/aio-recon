const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();

    console.log(chalk.cyan.bold('\n Default Nmap Host Discovery (-sn)\n'));
    console.log(chalk.white(`-We'll use Nmap's default host discovery mode: ${chalk.green('nmap -sn')}`));
    console.log(chalk.white(`-This sends multiple probes including:`));
    console.log(chalk.white(`   - ICMP Echo Request (ping)`));
    console.log(chalk.white(`   - TCP SYN to port 443 (and sometimes others)`));
    console.log(chalk.white(`   - ICMP Timestamp & Address Mask Requests`));
    console.log(chalk.white(`-When run with ${chalk.yellow.bold('sudo')}, Nmap performs full discovery (ICMP + TCP probes).\n`));

    console.log(chalk.yellow(`⚠️  Notes:`));
    console.log(chalk.yellow(`   - A host is considered 'up' if it responds to ANY of these.`));
    console.log(chalk.yellow(`   - Works well even if ICMP or some ports are blocked, as long as one probe gets through.`));
    console.log(chalk.yellow(`   - Faster than full port scan and covers more ground than ICMP-only or TCP-only discovery.\n`));

    const { subnet } = await inquirer.prompt([
      {
        type: 'input',
        name: 'subnet',
        message: 'Enter IP/subnet or domain name'
      },
    ]);

    console.log(chalk.blue(`\n📡 Scanning ${subnet} for live hosts using Nmap's default discovery (-sn)...\n`));

    const { stdout } = await run(`sudo nmap -sn ${subnet}`);

    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(err.message));
  }
}

module.exports = {
  run: runfn
};
