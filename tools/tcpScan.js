const { promisify } = require('util');
const { exec } = require('child_process');
const run = promisify(exec);
const inquirer = require('inquirer').default;
const chalk = require('chalk') 

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

    console.log(`\n📡 Running TCP scan lookup for: ${domain}...\n`);
    
    const { stdout } = await run(`nmap -sT -v ${domain}`);
    console.log( chalk.green(stdout));
    
  } catch (err) {
    console.error("Error running TCP Scan:", err.message);
  }
}

module.exports = {
  run: runfn
};
