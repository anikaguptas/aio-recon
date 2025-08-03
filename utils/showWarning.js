const chalk = require('chalk');

function showWarning() {
  console.log(chalk.red.bold('\n⚠️  WARNING: Unauthorized Use is Prohibited!'));
  console.log(chalk.gray('——————————————————————————————————————————————'));
  console.log(
    chalk.yellowBright(
      `This tool is intended for ${chalk.bold('educational and authorized cybersecurity research')} only.`
    )
  );
  console.log(
    chalk.yellow(
      `Any misuse, including scanning systems without permission, is ${chalk.bold('strictly illegal')} and may result in criminal charges.`
    )
  );
  console.log(
    chalk.yellow(
      `By using this tool, you agree that the developer holds no responsibility for any damage or misuse.`
    )
  );
  console.log(chalk.gray('——————————————————————————————————————————————'));
  console.log(chalk.green.bold('✔ Proceed only if you have proper authorization.\n'));
}

module.exports = showWarning;
