const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain DNS Enumeration
    console.clear();
    console.log(chalk.cyan.bold('\n🌐 DNS Enumeration using dig + dnsrecon (Parallel Execution)\n'));
    console.log(chalk.white(`👉 DNS Enumeration helps in discovering:`));
    console.log(chalk.white(`   - Subdomains, Name Servers, MX Records, Zone Transfers, etc.`));
    console.log(chalk.white(`👉 Running both tools at the same time for faster results:`));
    console.log(chalk.green(`   1. dig (Manual, raw queries)`));
    console.log(chalk.green(`   2. dnsrecon (Automated, zone transfers, brute force, etc.)\n`));

    // Step 2: Ask for the domain
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: '🔍 Enter a domain for DNS Enumeration:',
        validate: input => input.trim() !== '' || 'Domain cannot be empty',
      }
    ]);

    // Step 3: Prepare both commands
    const digCmd = `dig ${domain}`;
    const dnsreconCmd = `dnsrecon -d ${domain}`;

    // Step 4: Run both in parallel
    console.log(chalk.blue.bold(`\n🚀 Running dig and dnsrecon in parallel...\n`));
    const [digResult, reconResult] = await Promise.all([
      run(digCmd),
      run(dnsreconCmd)
    ]);

    // Step 5: Output both results
    console.log(chalk.green.bold('\n🔎 dig Results:\n'));
    console.log(chalk.greenBright(digResult.stdout));

    console.log(chalk.yellow.bold('\n🧠 dnsrecon Results:\n'));
    console.log(chalk.yellow(reconResult.stdout));

  } catch (err) {
    console.error(chalk.red(`❌ DNS Enumeration failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
