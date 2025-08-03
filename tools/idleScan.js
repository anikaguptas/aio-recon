const { run } = require('../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    console.clear();
    console.log(chalk.cyan.bold('\n🧟 Idle/Zombie Scan (-sI)\n'));

    // Detailed Explanation
    console.log(chalk.white('🔎 The Idle/Zombie scan is a stealthy TCP port scanning technique that allows you to scan a target'));
    console.log(chalk.white('    without sending packets directly from your own system. Instead, a third-party host—called a "Zombie"—is used.'));
    console.log();

    console.log(chalk.yellow('🧟 What is a Zombie Host?'));
    console.log(chalk.white(`    A Zombie is an idle machine with a predictable IP ID sequence. IP ID is a field in the IP header that increments `));
    console.log(chalk.white(`    with each packet the host sends. Nmap uses this behavior to track whether the zombie sent a response or not.`));
    console.log();

    console.log(chalk.yellow('🧠 How the Scan Works (Internally):'));
    console.log(chalk.white(`    1️⃣ First, Nmap probes the Zombie to learn its current IP ID value.`));
    console.log(chalk.white(`    2️⃣ Then, it sends a spoofed SYN packet to the target (pretending to be the Zombie).`));
    console.log(chalk.white(`    3️⃣ If the port is open on the target, it sends a SYN-ACK to the Zombie.`));
    console.log(chalk.white(`    4️⃣ The Zombie, unaware, sends a RST back, increasing its IP ID.`));
    console.log(chalk.white(`    5️⃣ Nmap probes the Zombie again. If the IP ID has jumped, it infers the port is open.\n`));

    console.log(chalk.green('✔ Advantage:'));
    console.log(chalk.white('   Your actual IP is never seen by the target — only the Zombie’s IP is involved.'));
    console.log(chalk.white('   It’s great for avoiding firewalls, IDS/IPS systems, or legal risks in red-team ops.\n'));

    console.log(chalk.red('⚠️ Requirements for Zombie:'));
    console.log(chalk.white('   - Must be idle (not communicating actively)'));
    console.log(chalk.white('   - Must have predictable IP ID (increment by 1 each packet)'));
    console.log(chalk.white('   - Should not have firewall or packet filtering enabled\n'));

    // Prompting for inputs
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🎯 Enter target IP or domain:',
        validate: input => input.trim() !== '' || 'Target cannot be empty.',
      }
    ]);

    const { zombie } = await inquirer.prompt([
      {
        type: 'input',
        name: 'zombie',
        message: '🧟 Enter Zombie Host IP (must be idle & predictable):',
        validate: input => input.trim() !== '' || 'Zombie IP cannot be empty.',
      }
    ]);

    // Running the scan
    console.log(chalk.blue(`\n🚀 Launching Idle Scan on ${target} using Zombie Host ${zombie}...\n`));
    const cmd = `nmap -sI ${zombie} ${target}`;
    const { stdout } = await run(cmd);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ Idle Scan failed: ${err.message}`));
  }
}
module.exports = {
  run: runfn
};
