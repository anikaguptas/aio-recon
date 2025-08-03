const { promisify } = require('util');
const { exec } = require('child_process');
const run = promisify(exec);
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Enter the domain (e.g., example.com):',
        validate: input => input.trim() !== '' || 'Domain cannot be empty'
      }
    ]);

    console.log(chalk.cyan(`\n📡 Running tools in parallel for: ${domain}...\n`));

    const digCmd = `dig ${domain}`;
    const nslookup = `nslookup ${domain}`;

    const [digResult, nslookupResult] = await Promise.all([
      run(digCmd),
      run(nslookup)
    ]);

    console.log(chalk.yellow.bold('\n🔍 DIG Result (Domain to IP):\n'));
    console.log(chalk.green(digResult.stdout || 'No IP found'));
    console.log(chalk.yellow.bold('\n🛰️  NSLOOKUP Result:\n'));
    console.log(chalk.green(nslookupResult.stdout));
  } catch (err) {
    console.error(chalk.red('❌ Error:'), err.message);
  }
}

module.exports = {
  run: runfn
};
