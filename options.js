const chalk = require("chalk");

module.exports = [
  {
    name: chalk.yellow.bold('Find IP/Host name'),
    value: 'IP/Host name',
    disabled: true,
  },
  {
    name: chalk.yellow.bold('Find IP from host name'),
    value: 'domaintoIP',
  },
  {
    name: chalk.yellow.bold('Find IP from host name'),
    value: 'IP/Host name',
  },


  // 🛰️ Host Discovery
  {
    name: chalk.yellow.bold('🛰️ Host Discovery'),
    value: 'host_discovery',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("ICMP Echo Scan") + chalk.gray(" - Detect a live host"),
    value: "icmpEcho",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("ICMP Echo Subnet Scan") + chalk.gray(" - Detect  live hosts in a subnet"),
    value: "icmpEchoBulk",
    dependencies: ["fping"],
  },
  {
    name: '[+] ' + chalk.cyan("TCP+ICMP scan") + chalk.gray(" - Discover live hosts by sending TPC and ICMP packets (bypass firewall)"),
    value: "tcpSynHost",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Scan from IP List") + chalk.gray(" - File based live host scan"),
    value: "hostScanFromFile",
    dependencies: ["nmap"],
  },

  // 📦 Port Scanning
  {
    name: chalk.yellow.bold('🚪 Basic Port Scanning'),
    value: 'port_basic',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("TCP Connect Scan") + chalk.gray(" - Full 3-way handshake"),
    value: "tcpConnect",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("UDP Port Scan") + chalk.gray(" - Detect open UDP ports"),
    value: "udpScan",
    dependencies: ["nmap"],
  },

  // 🕵️ Stealth & Bypass Scans
  {
    name: chalk.yellow.bold('🕵️ Stealth (Avoid detection)'),
    value: 'port_stealth',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("SYN Stealth Scan") + chalk.gray(" - Semi-open scan"),
    value: "tcpStealth",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("FIN Scan") + chalk.gray(" - Sneaky firewall evasion"),
    value: "finScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("XMAS Scan") + chalk.gray(" - Sets unusual TCP flags"),
    value: "xmasScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("NULL Scan") + chalk.gray(" - No flags, confuse firewalls"),
    value: "nullScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("ACK Scan") + chalk.gray(" - Check filtering rules"),
    value: "ackScan",
    dependencies: ["nmap"],
  },

  // 🧨 Firewall Evasion Techniques
  {
    name: chalk.yellow.bold('🧨 Firewall Evasion Techniques'),
    value: 'fw_evasion',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("Fragment Packets") + chalk.gray(" - Break scan into small pieces"),
    value: "packetFragment",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Use Decoys") + chalk.gray(" - Hide your IP with fake ones"),
    value: "decoyScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Source Port Spoof") + chalk.gray(" - Use trusted port like 53"),
    value: "sourcePortScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Idle/Zombie Scan") + chalk.gray(" - Scan via third-party host"),
    value: "idleScan",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("MAC Spoofing") + chalk.gray(" - Change your MAC address"),
    value: "macSpoof",
    dependencies: ["nmap"],
  },

  // 🏷️ Service & Version Detection
  {
    name: chalk.yellow.bold('🏷️ Service & Version Detection'),
    value: 'service_detection',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("Detect Versions") + chalk.gray(" - Software versions"),
    value: "versionDetection",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Fingerprint Services") + chalk.gray(" - Identify unknown services"),
    value: "fingerprintService",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Banner Grabbing") + chalk.gray(" - Auto banner detection"),
    value: "bannerGrab",
    dependencies: ["nmap"],
  },
  {
    name: '[+] ' + chalk.cyan("Guess OS") + chalk.gray(" - TCP/IP stack behavior"),
    value: "osGuess",
    dependencies: ["nmap"],
  },
  {
    name: chalk.yellow.bold("🛰️ Network Topology & Route Analysis"),
    value: "net_topology",
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("Trace Route Path") + chalk.gray(" - Show route to host"),
    value: "traceRoute",
    dependencies: ["traceroute"],
  },
  // 🔐 SSL / WHOIS / DNS / Traceroute / Emails
  {
    name: chalk.yellow.bold('🔐 SSL / DNS / WHOIS / Email'),
    value: 'ssl_misc',
    disabled: true,
  },
  {
    name: '[+] ' + chalk.cyan("WHOIS Lookup") + chalk.gray(" - Domain info"),
    value: "whoisLookup",
    dependencies: ["whois"],
  },
  {
    name: '[+] ' + chalk.cyan("DNS Enumeration") + chalk.gray(" - Subdomain enum"),
    value: "dnsRecon",
    dependencies: ["dnsrecon", "dig"],
  },
  {
    name: '[+] ' + chalk.cyan("Email Finder") + chalk.gray(" - theHarvester"),
    value: "emailFinder",
    dependencies: ["theHarvester"],
  },
  // 🚨 Exit
  {
    name: '[+] ' + chalk.red("🚪 Exit") + chalk.gray(" - Close the tool"),
    value: "exit",
    dependencies: [],
  },
];
