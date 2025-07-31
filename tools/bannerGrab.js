const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n📰 Banner Grabbing - Capture Auto Banners (Nmap --script=banner)\n'));
    console.log(chalk.white(`This fetches text banners that services display when you connect (like FTP or HTTP).\n`));

    console.log(chalk.white(`🧠 How it works:`));
    console.log(chalk.white(`   - Nmap sends a basic connection to a service.`));
    console.log(chalk.white(`   - If the service responds with a banner (e.g., "Apache httpd 2.4.1"), it gets captured.`));
    console.log(chalk.white(`   - Banners often leak software name, version, and even OS info.\n`));

    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌐 Enter target IP or domain:',
        validate: val => val.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    const cmd = `nmap --script=banner ${target}`;
    console.log(chalk.blue(`\n🚀 Grabbing banners from ${target}...\n`));
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));
  } catch (err) {
    console.error(chalk.red(`❌ Banner grabbing failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
