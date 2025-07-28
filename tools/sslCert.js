const { promisify } = require('util');
const { exec } = require('child_process');
const inquirer = require('inquirer').default;
const run = promisify(exec);
const chalk = require('chalk');

async function sslCertInfo() {
  try {
    const { domain } = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: '🔐 Enter domain (e.g. google.com):',
        validate: (input) => !!input || 'Domain is required!',
      }
    ]);

    console.log(chalk.cyan(`\n📡 Fetching SSL Certificate info for ${domain}...\n`));

    const cmd = `echo | openssl s_client -connect ${domain}:443 -servername ${domain} 2>/dev/null | openssl x509 -noout -issuer -subject -dates -serial -fingerprint`;

    const { stdout } = await run(cmd);

    console.log(chalk.greenBright('🔍 Certificate Info:'));
    console.log(chalk.gray('--------------------------------'));
    console.log(chalk.white(stdout.trim()));
    console.log(chalk.gray('--------------------------------\n'));

  } catch (err) {
    console.log(chalk.red('❌ Failed to retrieve SSL cert info'));
    console.error(chalk.gray(err.message));
  }
}

module.exports = sslCertInfo;
