const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n Source Port Spoofing (--source-port)\n'));
    console.log(chalk.white(`Spoofing the source port (like port 53 – DNS) might help bypass some firewall rules.\n`));
    
    console.log(chalk.white(` Why this works:`));
    console.log(chalk.white(`   - Firewalls often trust packets from certain ports (DNS, HTTP, etc).`));
    console.log(chalk.white(`   - Nmap’s --source-port option allows us to use these ports as the source.`));
    console.log(chalk.yellow(`  It's not guaranteed to bypass, but useful against basic firewalls.\n`));

    // Step 2: Choose a source port
    const { selectedPort } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedPort',
        message: ' Choose a source port to spoof:',
        choices: [
          { name: '53 (DNS - commonly trusted)', value: '53' },
          { name: '80 (HTTP - usually allowed)', value: '80' },
          { name: '443 (HTTPS - secure traffic)', value: '443' },
          { name: '20 (FTP - active mode data)', value: '20' },
          { name: 'Custom Port (Enter manually)', value: 'custom' },
        ],
      }
    ]);

    let sourcePort = selectedPort;
    if (selectedPort === 'custom') {
      const { customPort } = await inquirer.prompt([
        {
          type: 'input',
          name: 'customPort',
          message: ' Enter custom source port:',
          validate: val => {
            const port = parseInt(val, 10);
            if (isNaN(port) || port < 1 || port > 65535) return 'Please enter a valid port number (1-65535)';
            return true;
          }
        }
      ]);
      sourcePort = customPort;
    }

    // Step 3: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: ' Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 4: Run scan
    console.log(chalk.blue(`\n Running Nmap scan with source port ${sourcePort} on ${target}...\n`));
    const cmd = `nmap --source-port ${sourcePort} ${target}`;
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(` Source port spoof scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};

 