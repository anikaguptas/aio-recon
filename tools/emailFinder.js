const { promisify } = require('util');
const { exec } = require('child_process');
const run = promisify(exec);
const chalk = require('chalk');
const inquirer = require('inquirer').default;

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

  
      
    const { stdout } = await run(`theHarvester -d ${domain} -b all
`);

    console.log( chalk.green(stdout));
    
  } catch (err) {
    console.error("Error running email lookup:", err.message);
  }
}

module.exports = {
  run: runfn
};

