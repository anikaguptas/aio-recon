const chalk = require("chalk");
const inquirer = require('inquirer').default

module.exports = [
  // Host Discovery
  new inquirer.Separator(chalk.yellow.bold("Host Discovery")),
  {
    name: chalk.cyan("[+] ICMP Echo Scan") + chalk.gray(" - Detect a live host"),
    category:"hostDiscovery",
    value: "icmpEcho",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] ICMP Echo Subnet Scan") + chalk.gray(" - Detect  live hosts in a subnet"),
    category:"hostDiscovery",
    value: "icmpEchoBulk",
    dependencies: ["fping"],
  },
  {
    name: chalk.cyan("[+] TCP+ICMP scan") + chalk.gray(" - Discover live hosts by sending TPC and ICMP packets (bypass firewall)"),
    category:"hostDiscovery",
    value: "tcpSynHost",
    dependencies: ["nmap"],
  },
  {
    name:chalk.cyan("[+] Scan from IP List") + chalk.gray(" - File based live host scan"),
    category:"hostDiscovery",
    value: "hostScanFromFile",
    dependencies: ["nmap"],
  },

  // Port Scanning
  new inquirer.Separator(chalk.yellow.bold("Port Scanning")),

  {
    name: chalk.cyan("[+] TCP Connect Scan") + chalk.gray(" - Full 3-way handshake"),
    category:"portScanning",
    value: "tcpConnect",
    dependencies: ["nmap"],
  },
  {
    name:chalk.cyan("[+] UDP Port Scan") + chalk.gray(" - Detect open UDP ports"),
    category:"portScanning",
    value: "udpScan",
    dependencies: ["nmap"],
  },

  // Stealth & Bypass Scans
  new inquirer.Separator(chalk.yellow.bold("Stealthy Scans")),

  {
    name: chalk.cyan("[+] SYN Stealth Scan") + chalk.gray(" - Semi-open scan"),
    category:"stealthyScan",
    value: "tcpStealth",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] FIN Scan") + chalk.gray(" - Sneaky firewall evasion"),
    category:"stealthyScan",
    value: "finScan",
    dependencies: ["nmap"],
  },
  {
    name:  chalk.cyan("[+] XMAS Scan") + chalk.gray(" - Sets unusual TCP flags"),
    category:"stealthyScan",
    value: "xmasScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] NULL Scan") + chalk.gray(" - No flags, confuse firewalls"),
    value: "nullScan",
    category:"stealthyScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] ACK Scan") + chalk.gray(" - Check filtering rules"),
    category:"stealthyScan",
    value: "ackScan",
    dependencies: ["nmap"],
  },

  // Firewall Evasion Techniques
  new inquirer.Separator(chalk.yellow.bold("Firewall evasion techniques")),
  {
    name: chalk.cyan("[+] Fragment Packets") + chalk.gray(" - Break scan into small pieces"),
    category:"firewallEvasion",
    value: "packetFragment",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] Use Decoys") + chalk.gray(" - Hide your IP with fake ones"),
    category:"firewallEvasion",
    value: "decoyScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] Source Port Spoof") + chalk.gray(" - Use trusted port like 53"),
    category:"firewallEvasion",
    value: "sourcePortScan",
    dependencies: ["nmap"],
  },
  {
    name:  chalk.cyan("[+] Idle/Zombie Scan") + chalk.gray(" - Scan via third-party host"),
    category:"firewallEvasion",
    value: "idleScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] MAC Spoofing") + chalk.gray(" - Change your MAC address"),
    category:"firewallEvasion",
    value: "macSpoof",
    dependencies: ["nmap"],
  },

  // Service & Version Detection
  new inquirer.Separator(chalk.yellow.bold("Service & version Detections")),
  {
    name:  chalk.cyan("[+] Detect Versions") + chalk.gray(" - Software versions"),
    category:"serviceDetection",
    value: "versionDetection",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] Fingerprint Services") + chalk.gray(" - Identify unknown services"),
    category:"serviceDetection",
    value: "fingerprintService",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] Banner Grabbing") + chalk.gray(" - Auto banner detection"),
    category:"serviceDetection",
    value: "bannerGrab",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("[+] Guess OS") + chalk.gray(" - TCP/IP stack behavior"),
    category:"serviceDetection",
    value: "osGuess",
    dependencies: ["nmap"],
  },
  new inquirer.Separator(chalk.yellow.bold("Network topology")),
  {
    name: chalk.cyan("[+] Trace Route Path") + chalk.gray(" - Show route to host"),
    category:"networkTopology",
    value: "traceRoute",
    dependencies: ["traceroute"],
  },
  // WHOIS / DNS / Traceroute / Emails
  new inquirer.Separator(chalk.yellow.bold("DNS, Emails, Domain info")),
  {
    name: chalk.cyan("[+] Domain info") + chalk.gray(" - Domain info"),
    category:"DNS&email",
    value: "whoisLookup",
    dependencies: ["whois"],
  },
  {
    name: chalk.cyan("[+] DNS Enumeration") + chalk.gray(" - Subdomain enum"),
    category:"DNS&email",
    value: "dnsRecon",
    dependencies: ["dnsrecon", "dig"],
  },
  {
    name:  chalk.cyan("[+] Email Finder") + chalk.gray(" - theHarvester"),
    category:"DNS&email",
    value: "emailFinder",
    dependencies: ["theHarvester"],
  },
  // Exit
  {
    name: chalk.red("Exit") + chalk.gray(" - Close the tool"),
    category:"EXIT",
    value: "exit",
    dependencies: [],
  },
];
