const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n Version Detection - Identify Software Versions (Nmap -sV)\n'));
    console.log(chalk.white(`This scan identifies the software and its version running on each open port.\n`));

    console.log(chalk.white(` How it works:`));
    console.log(chalk.white(`   - Nmap connects to open ports and sends specific probes.`));
    console.log(chalk.white(`   - It analyzes responses (headers, banners, responses to known payloads).`));
    console.log(chalk.white(`   - Then it matches against Nmap's version database to identify service & version.\n`));

    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: ' Enter target IP or domain:',
        validate: val => val.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    const cmd = `nmap -sV ${target}`;
    console.log(chalk.blue(`\n Detecting service versions on ${target}...\n`));
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(` Version detection failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
