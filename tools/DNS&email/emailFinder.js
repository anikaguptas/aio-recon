const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Educate the user
    console.clear();
    console.log(chalk.cyan.bold('\n theHarvester - Email & Subdomain Enumerator\n'));
    console.log(chalk.white(` Gathers emails, subdomains, and more using public sources like Google, Bing, etc.`));
    console.log(chalk.green(`\n Useful in passive reconnaissance.\n`));

    // Step 2: Get domain & source
    const { domain, source } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'Enter a domain:',
        validate: input => input.trim() !== '' || 'Domain cannot be empty',
      },
      {
        type: 'list',
        name: 'source',
        message: 'Choose data source:',
        choices: ['google', 'bing', 'duckduckgo', 'github', 'linkedin', 'all'],
        default: 'all',
      }
    ]);

    const cmd = `theHarvester -d ${domain} -b ${source} -n`;

    console.log(chalk.blue.bold(`\nRunning: ${cmd}\n`));
    const { stdout, stderr } = await run(cmd);

    const filteredOutput = stdout
    .split('\n')
    .filter(line => !/exception|missing/i.test(line))
    .join('\n');
  
    console.log(filteredOutput);
  

    if (stderr.trim()) {
      console.log(chalk.red.bold('\n⚠️ Error Output:\n'));
      console.log(chalk.red(stderr));
    }

  } catch (err) {
    console.error(chalk.red(` Failed to run theHarvester: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
