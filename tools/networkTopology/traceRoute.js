const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n  What is Traceroute?\n'));
    console.log(chalk.white(`Traceroute is a diagnostic tool used to track the path that your packets take from your computer to a destination (like a website or IP).`));
    console.log(chalk.white(`It helps identify delays, bottlenecks, or where a connection may be getting blocked.`));
    console.log(chalk.white(`\n How it works:`));
    console.log(chalk.white(`   1)  Sends packets with increasing TTL (Time To Live)`));
    console.log(chalk.white(`   2_  Each router along the path replies when TTL expires`));
    console.log(chalk.white(`   3_  Stops when it reaches the destination or times out\n`));
    console.log(chalk.green(`Useful for debugging network issues and mapping internet paths.`));
    console.log(chalk.yellow(`⚠️ Note: Some routers or firewalls may block traceroute probes.\n`));

    // Step 2: Ask user for target input
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: 'Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Execute traceroute command
    console.log(chalk.blue(`\n Tracing route to ${target}...\n`));
    const { stdout } = await run(`traceroute ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(` Traceroute failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
