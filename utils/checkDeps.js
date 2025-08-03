const inquirer = require('inquirer').default;
const { run } = require('./runner');

async function checkAndInstall(deps = []) {
  for (const dep of deps) {
    try {
      await run(`which ${dep}`);
    } catch {
      const { install } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'install',
          message: `Tool "${dep}" is not installed. Do you want to install it?`,
          default: false
        }
      ]);
      if (install) {
        await run(`apt install -y ${dep}`);
      } else {
        console.log(`⚠️ Permission not granted to install "${dep}`);
        process.exit(1);
      }
    }
  }
}

module.exports = checkAndInstall;
