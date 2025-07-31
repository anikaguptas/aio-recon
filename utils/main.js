const inquirer = require('inquirer').default;
const optionListRaw = require('../options');
const checkAndInstall = require('./checkDeps')
const chalk = require('chalk');

async function main() {

  const optionList = optionListRaw.map(option => ({
    ...option,
    name: chalk.green(option.name),
  }));
    const { selectedOption } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedOption',
          message: 'Use arrow keys to scroll between the options',
          choices: optionList,
          pageSize : 50
        }
      ]);
    
      const option = optionList.find(t => t.value === selectedOption);
      if (!option) return console.error("❌ option not found.");
     
    
      await checkAndInstall(option.dependencies);
    
      const toolRunner = require(`../tools/${option.value}.js`);
      toolRunner.run();
}
module.exports = { main };
