const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain ACK Scan
    console.clear();
    console.log(chalk.cyan.bold('\n What is an ACK Scan?\n'));
    console.log(chalk.white(`An ACK Scan sends TCP packets with only the ACK flag set.`));
    console.log(chalk.white(`It's not used to detect open ports, but to check firewall rules and filtering behavior.\n`));

    console.log(chalk.yellow.bold(` Expected Behavior:\n`));
    console.log(chalk.yellow(` If RST is received → Port is UNFILTERED (packet reached the host)`));
    console.log(chalk.yellow(` If no response or ICMP unreachable → Port is FILTERED (blocked by firewall)\n`));

    console.log(chalk.blue(` Good for mapping firewall rules and understanding filtering policies.`));
    console.log(chalk.gray(` Works even when ICMP (ping) is blocked — purely TCP-based analysis.\n`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: 'Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Ask for custom port (ACK scans require port)
    const { port } = await inquirer.prompt([
      {
        type: 'input',
        name: 'port',
        message: '🔢 Enter a port to send ACK (e.g., 80):',
        default: '80',
        validate: input => /^\d+$/.test(input) || 'Please enter a valid port number.',
      }
    ]);

    // Step 4: Run the ACK Scan
    console.log(chalk.blue(`\n Launching ACK Scan (-sA) on ${target} at port ${port}...\n`));
    const { stdout } = await run(`nmap -sA -p ${port} ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(` Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
