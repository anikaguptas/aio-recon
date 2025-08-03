const chalk = require('chalk');

function showWarning() {
  console.log(
    chalk.red.bold('\n⚠️ WARNING: Unauthorized Use is Prohibited!') +
    chalk.yellow(
      ` This tool is for educational and authorized use only. Scanning without permission is illegal and punishable. Use responsibly, the developer is not liable for misuse.`
    )
  );
}

module.exports = showWarning;
