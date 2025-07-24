const { run } = require('../utils/runner');
const chalk = require('chalk');
const inquirer = require('inquirer').default;

async function runfn() {
  try {
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: '🔍 Enter domain to scan with dnsrecon:',
        validate: input => input.trim() !== '' || 'Domain cannot be empty'
      }
    ]);

    console.log(chalk.cyan(`\n📡 Running dnsrecon on: ${domain}\n`));
    const { stdout, stderr } = await run(`dnsrecon -d ${domain}`);

    if (stderr) {
      console.log(chalk.red(`⚠️ Error:\n${stderr}`));
    }

    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(`❌ Failed to run dnsrecon: ${err.message}`));
  }
}

module.exports = { run: runfn };
