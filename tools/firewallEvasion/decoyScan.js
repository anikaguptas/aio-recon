const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain Decoy Scanning
    console.clear();
    console.log(chalk.cyan.bold('\n🕵️‍♀️ Use Decoys (-D)\n'));

    console.log(chalk.white(`A decoy scan helps hide your real IP address by mixing it with fake IPs.`));
    console.log(chalk.white(`Nmap sends packets from multiple IPs (real + fake), confusing the target.`));

    console.log(chalk.white(`\n💡 Why use decoys?`));
    console.log(chalk.white(`   🔸 To avoid detection or logging of your real IP`));
    console.log(chalk.white(`   🔸 Useful in red teaming or evasion situations`));

    console.log(chalk.yellow(`\n⚠️  Note:`));
    console.log(chalk.yellow(`   - Some IDS/firewalls may detect decoys.`));
    console.log(chalk.yellow(`   - Too many decoys may slow the scan or trigger alerts.`));
    console.log(chalk.yellow(`   - Works best if the decoy IPs look realistic to the target.\n`));

    console.log(chalk.green(`✅ By default, we'll use 5 random decoy IPs along with your real one and we send a SYN flag set only(hald open scan)`));

    // Step 2: Ask for target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run decoy scan
    console.log(chalk.blue(`\n🚀 Launching Decoy Scan (-D RND:5) on ${target} [Top 1000 Ports]...\n`));
    const cmd = `nmap -sS -D RND:5 ${target}`;
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Decoy scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
