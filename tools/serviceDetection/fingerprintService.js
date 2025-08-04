const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n Fingerprint Services - Identify Unknown Services (Nmap -sV --version-intensity 9)\n'));
    console.log(chalk.white(`This aggressively probes services to identify even obscure or custom software.\n`));

    console.log(chalk.white(` How it works:`));
    console.log(chalk.white(`   - Nmap sends multiple types of payloads (high intensity).`));
    console.log(chalk.white(`   - Compares the responses to known patterns in its fingerprint database.`));
    console.log(chalk.white(`   - Higher intensity = deeper analysis, but may be noisy and slower.\n`));

    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: 'Enter target IP or domain:',
        validate: val => val.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    const cmd = `nmap -sV --version-intensity 9 ${target}`;
    console.log(chalk.blue(`\n Running deep fingerprinting on ${target}...\n`));
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(` Fingerprinting failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
