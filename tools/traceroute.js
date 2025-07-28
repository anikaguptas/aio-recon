const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter IP or domain for traceroute:',
        validate: input => input.trim() !== '' || 'Target cannot be empty'
      }
    ]);

    console.log(chalk.blue(`\n🚀 Tracing route to ${target}...\n`));
    const { stdout } = await run(`traceroute ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Traceroute failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
