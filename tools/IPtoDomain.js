const { promisify } = require('util');
const { exec } = require('child_process');
const run = promisify(exec);
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    const { IP } = await inquirer.prompt([
      {
        type: 'input',
        name: 'IP',
        message: 'Enter the IP (e.g. 8.8.8.8):',
        validate: input => input.trim() !== '' || 'IPIP cannot be empty'
      }
    ]);

    console.log(chalk.cyan(`\n📡 Running tools  for: ${IP}...\n`));

    
    const hostCmd = `host ${IP}`;
    const nslookup = `nslookup ${IP}`;

    const [hostResult, nslookupResult] = await Promise.all([
      run(hostCmd),
      run(nslookup)
    ]);
    console.log(chalk.yellow.bold('\n🔍 Host Result\n'));
    console.log(chalk.green(hostResult.stdout || 'No IP found'));
    console.log(chalk.yellow.bold('\n🛰️  NSLOOKUP detailed Result:\n'));
    console.log(chalk.green(nslookupResult.stdout));
  } catch (err) {
    console.error(chalk.red('❌ Error:'), err.message);
  }
}

module.exports = {
  run: runfn
};
