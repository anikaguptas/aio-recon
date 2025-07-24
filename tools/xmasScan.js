const {run} = require('../utils/runner')
const chalk = require('chalk');
const inquirer = require('inquirer').default

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

    console.log(`\n📡 Running XMAS scan lookup for: ${domain}...\n`);
    
    const { stdout } = await run(`nmap -sX ${domain}`);
    console.log( chalk.green(stdout));
    
  } catch (err) {
    console.error("Error running XMAS scan:", err.message);
  }
}

module.exports = {
  run: runfn
};
