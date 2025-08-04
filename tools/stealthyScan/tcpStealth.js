const { run } = require('../../utils/runner');
const inquirer = require('inquirer').default;
const chalk = require('chalk');

async function runfn() {
  try {
    // Step 1: Explain what SYN Stealth Scan does
    console.clear();
    console.log(chalk.cyan.bold('\n🕵️‍♂️ Understanding SYN Stealth Scan (Half-Open Scan)\n'));
    console.log(chalk.white(`👉 Also called a "Half-Open" scan because it doesn't complete the TCP handshake.`));
    console.log(chalk.white(`👉 Here's how it works:`));
    console.log(chalk.white(`   1. Nmap sends a SYN packet to the target port.`));
    console.log(chalk.white(`   2. If SYN-ACK is received, the port is considered OPEN.`));
    console.log(chalk.white(`   3. Nmap immediately responds with RST (reset), instead of completing the handshake with ACK.`));
    console.log(chalk.white(`👉 No full connection is established, hence it's stealthier than -sT (Connect Scan).`));

    console.log(chalk.yellow(`\n🧱 Detection & Evasion:`));
    console.log(chalk.yellow(`   - Avoids completing 3-way handshake, making it less detectable by logging systems.`));
    console.log(chalk.yellow(`   - Works best with raw socket privileges (requires sudo on Linux).`));
    console.log(chalk.yellow(`   - May still be detected by advanced IDS or firewalls that track SYNs.\n`));

    // Step 2: Ask for the target
    const { target } = await inquirer.prompt([
      {
        type: 'input',
        name: 'target',
        message: '🌍 Enter IP or domain to scan with SYN Stealth Scan:',
        validate: input => input.trim() !== '' || 'Target cannot be empty',
      }
    ]);
    // Step 3: Run the SYN Stealth Scan
    console.log(chalk.blue(`\n🔎 Running SYN Stealth Scan (-sS) on ${target}...\n`));
    const { stdout } = await run(`nmap -sS ${target}`);
    console.log(chalk.green(stdout));

  } catch (err) {
    console.error(chalk.red(`❌ SYN Stealth Scan failed: ${err.message}`));
  }
}

module.exports = {
  run: runfn
};
