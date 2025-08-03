const chalk = require('chalk');
const inquirer = require('inquirer').default
const { run } = require('../utils/runner');

async function runfn() {
  try {
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Enter domain or IP:',
        validate: input => input.trim() !== '' || 'Domain cannot be empty'
      }
    ]);
    console.log(`\n📡 Running OS lookup for: ${domain}...\n`);
    
    const { stdout } = await run(`nmap -O ${domain}`);
    console.log( chalk.green(stdout));
    
  } catch (err) {
    console.error("Error running OS fingerprinting:", err.message);
  }
}

module.exports = {
  run: runfn
};
