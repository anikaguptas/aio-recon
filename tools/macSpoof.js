const { promisify } = require('util');
const { exec } = require('child_process');
const inquirer = require('inquirer').default;
const chalk = require('chalk');
const run = promisify(exec);

async function runMacSpoof() {
  console.clear();
  console.log(chalk.cyan.bold("\n⚙️  MAC Spoofing with Nmap\n"));
  console.log(chalk.gray("🔒 MAC spoofing lets you hide or disguise your device's identity on the network by changing the source MAC address in packets.\n"));
  console.log(chalk.gray("🧠 Nmap supports spoofing via the --spoof-mac option, allowing us to simulate traffic as if it’s coming from another vendor or a random MAC.\n"));

  const { target } = await inquirer.prompt([
    {
      type: 'input',
      name: 'target',
      message: '🎯 Enter the target IP or domain:',
      validate: input => input.trim() !== '' || 'Target is required'
    }
  ]);

  console.log(chalk.gray("\n🎭 Choose how you want your MAC to appear to the target system."));

  const { spoofChoice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'spoofChoice',
      message: '🕵️ MAC Spoofing Options:',
      choices: [
        { name: 'Random MAC Address (vendor-neutral)', value: '0' },
        { name: 'Pretend to be Apple (e.g., iPhone/MacBook)', value: 'Apple' },
        { name: 'Pretend to be Cisco (e.g., routers/switches)', value: 'Cisco' },
        { name: 'Pretend to be Intel (common on many PCs)', value: 'Intel' },
        { name: '🔧 Enter custom MAC address manually', value: 'custom' }
      ]
    }
  ]);

  let macValue = spoofChoice;
  if (spoofChoice === 'custom') {
    console.log(chalk.yellow("\n⚠️ Make sure your custom MAC address is valid and in proper format (e.g., 00:11:22:33:44:55)"));
    const { customMAC } = await inquirer.prompt([
      {
        type: 'input',
        name: 'customMAC',
        message: '✍️ Enter custom MAC address:',
        validate: input => /^([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}$/.test(input) || '❌ Invalid MAC address format.'
      }
    ]);
    macValue = customMAC;
  }

  const cmd = `nmap --spoof-mac ${macValue} ${target}`;

  console.log(chalk.yellow(`\n🚀 Running Nmap with MAC spoofing:\n${cmd}\n`));
  console.log(chalk.gray("📡 Sending packets with the spoofed MAC... This may help avoid detection or trick the target into trusting your traffic.\n"));

  try {
    const { stdout } = await run(cmd);
    console.log(chalk.green('✅ Scan completed successfully!\n'));
    console.log(stdout);
    console.log(chalk.gray('\n📘 FYI: MAC spoofing is just one part of stealth scanning. Combine with decoys, timing options, or idle scans for better OPSEC.\n'));
  } catch (err) {
    console.error(chalk.red('❌ Error running MAC spoofed scan:\n'), err.stderr || err.message);
  }
}

module.exports = {
  run: runMacSpoof
};
