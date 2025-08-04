const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain what WHOIS does
    console.clear();
    console.log(chalk.cyan.bold('\n🌐 Understanding WHOIS Lookup\n'));
    console.log(chalk.white(`👉 WHOIS is a protocol used to retrieve information about domain names or IP addresses.`));
    console.log(chalk.white(`👉 It can reveal:`));
    console.log(chalk.white(`   - Domain registrant (owner) details`));
    console.log(chalk.white(`   - Registration and expiry dates`));
    console.log(chalk.white(`   - Registrar info (e.g., GoDaddy, Namecheap)`));
    console.log(chalk.white(`   - Contact information & name servers\n`));

    console.log(chalk.yellow(`⚠️  Note:`));
    console.log(chalk.yellow(`   - Some registrars hide details using privacy protection.`));
    console.log(chalk.yellow(`   - Always respect data privacy and legal usage when gathering WHOIS info.\n`));

    // Step 2: Ask for the domain or IP
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🔍 Enter a domain or IP for WHOIS lookup:',
        validate: input => input.trim() !== '' || 'Input cannot be empty',
      }
    ]);

    // Step 3: Run the WHOIS command
    console.log(chalk.blue(`\n📡 Running WHOIS lookup on ${target}...\n`));
    const { stdout } = await run(`whois ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ WHOIS Lookup failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
