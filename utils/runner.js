const { exec } = require('child_process');
const { promisify } = require('util');
const run = promisify(exec);

module.exports = { run };
