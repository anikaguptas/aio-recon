const chalk = require('chalk');

module.exports = [
  {
    name: chalk.cyan(' TCP Port Scan') + chalk.gray(' - Check open TCP ports'),
    value: 'tcpScan',
    dependencies: ['nmap']
  },
  {
    name: chalk.cyan(' UDP Port Scan') + chalk.gray(' - Discover open UDP ports'),
    value: 'udpScan',
    dependencies: ['nmap']
  },
  {
    name: chalk.cyan(' Email Hunter') + chalk.gray(' - Find emails using theHarvester'),
    value: 'emailFinder',
    dependencies: ['theHarvester']
  },
  {
    name: chalk.cyan(' WHOIS Lookup') + chalk.gray(' - Get domain registration info'),
    value: 'whoisLookup',
    dependencies: ['whois']
  },
  {
    name: chalk.cyan(' Domain to IP') + chalk.gray(' - Resolve domain name to IP'),
    value: 'domaintoIP',
    dependencies: ['nslookup', 'dig']
  },
  {
    name: chalk.cyan(' IP to Domain') + chalk.gray(' - Reverse DNS lookup'),
    value: 'IPtoDomain',
    dependencies: ['host', 'nslookup']
  },
  {
    name: chalk.cyan(' XMAS Scan') + chalk.gray(' - Stealth scan to bypass firewalls'),
    value: 'xmasScan',
    dependencies: ['nmap']
  },
  {
    name: chalk.cyan(' Host Discovery') + chalk.gray(' - Find live hosts on the network'),
    value: 'pingScan',
    dependencies: ['nmap']
  },
  {
    name: chalk.cyan(' OS Fingerprinting') + chalk.gray(' - Detect target operating system'),
    value: 'osFingerprinting',
    dependencies: ['nmap']
  },
  {
    name: chalk.cyan(' Service Version Detection') + chalk.gray(' - Find out what service/version is running on a port'),
    value: 'serviceVersion',
    dependencies: ['nmap']
  },
  { name: chalk.cyan(' DNS Enumeration') + chalk.gray(' - subdomain enumerator'),
     value: 'dnsRecon' ,
     dependencies : ['dnsrecon']
    },
  {
    name: chalk.red(' Exit') + chalk.gray(' - Close the tool'),
    value: 'exit',
    dependencies: []
  },
];
