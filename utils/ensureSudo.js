function ensureSudo() {
    if (process.getuid && process.getuid() !== 0) {
      console.error("❌ Please run this script with sudo.");
      process.exit(1);
    }
  }
  
  module.exports = ensureSudo;
  