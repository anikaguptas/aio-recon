// tools.js
module.exports = [
  {
    name: 'TCP Scan',
    value: 'tcpScan',
    dependencies: ['nmap']
  },
  {
    name: 'UDP Scan',
    value: 'udpScan',
    dependencies: ['nmap']
  },
  {
    name: 'Email Finder',
    value: 'emailFinder',
    dependencies: ['theHarvester']
  },
  {
    name: 'WHOIS Lookup',
    value: 'whoisLookup',
    dependencies: ['whois']
  },
  {
    name : 'Domain to IP address',
    value : 'domaintoIP',
    dependencies : ['nslookup' ,'dig']
  },
  {
    name : 'IP address to Domain',
    value : 'IPtoDomain',
    dependencies : ['host', 'nslookup']
  },
  {
    name : 'exit',
    value : 'exit',
    dependencies: []
  },
];
