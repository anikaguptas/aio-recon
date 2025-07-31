const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Clear and explain the technique
    console.clear();
    console.log(chalk.cyan.bold('\n✂️  Fragment Packets Scan (-f)\n'));
    
    console.log(chalk.white(`🧠 What is this?\n`));
    console.log(chalk.white(`This technique tells Nmap to split probe packets into smaller fragments.`));
    console.log(chalk.white(`It's used to bypass some firewalls or intrusion detection systems (IDS) that struggle to reassemble fragmented packets.`));
    
    console.log(chalk.white(`\n💡 Why does this help?\n`));
    console.log(chalk.white(`   🔸 Some security tools inspect full packets only.`));
    console.log(chalk.white(`   🔸 Fragmented packets might sneak through if the system doesn't reassemble them correctly.`));
    console.log(chalk.white(`   🔸 Useful in stealthy or evasive scans where you want to avoid triggering alarms.`));

    console.log(chalk.yellow(`\n⚠️  Caution:`));
    console.log(chalk.yellow(`   - Some servers might drop incomplete or malformed packets.`));
    console.log(chalk.yellow(`   - This technique is **not reliable** against modern, well-configured firewalls.`));

    console.log(chalk.green(`\n✅ Best used against older or misconfigured networks as a bypass method.\n`));

    // Step 2: Ask for target input
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    // Step 3: Run the scan
    console.log(chalk.blue(`\n🚀 Launching Packet Fragmentation Scan (-f) on ${target} [Top 1000 Ports]...\n`));
    const cmd = `nmap -f ${target}`;
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Fragmented scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
