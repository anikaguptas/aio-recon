const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');
const fs = require('fs');

async function runfn() {
  try {
    console.clear();

    console.log(chalk.cyan.bold('\n Host Discovery (ICMP + UDP)\n'));

    console.log(chalk.white(`- This method uses:`));
    console.log(chalk.white(`   • ICMP Echo Requests (like ping)`));
    console.log(chalk.white(`   • TCP packets to common ports`));

    console.log(chalk.white(`\n- A host is considered alive if it responds to any of these.`));
    console.log(chalk.yellow(`⚠️ ICMP may be blocked by firewalls. so TCP response can help.\n`));

    const { filePath } = await inquirer.prompt([
      {
        type: 'input',
        name: 'filePath',
        message: 'Enter path to file with IPs/domains:',
        validate: function (input) {
          if (!fs.existsSync(input)) {
            return 'File not found. Please enter a valid path.';
          }
          return true;
        }
      }
    ]);

    console.log(chalk.blue(`\n Scanning hosts from file...\n`));
    const nmapCommand = `nmap -sn -iL ${filePath}`;
    const { stdout } = await run(nmapCommand);

    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(err.message));
  }
}

module.exports = {
  run: runfn
};
