#!/usr/bin/env node

const { main } = require('./utils/main');
const showBanner = require('./utils/showBanner');
const showWarning = require('./utils/showWarning')
const ensureSudo = require('./utils/ensureSudo');
ensureSudo();
showBanner();
showWarning();

process.on('SIGINT', () => {
  console.log('\n❌ Exiting via Ctrl+C...');
  process.exit(0);
});

(async () => {
  try {
    await main();
  } catch (err) {
    if (err?.constructor?.name === 'ExitPromptError') {
      console.log('\n❌ Prompt cancelled with Ctrl+C.');
      process.exit(0);
    }

    console.error('❗ Unexpected error:', err);
    process.exit(1);
  }
})();
