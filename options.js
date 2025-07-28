// const chalk = require("chalk");

// module.exports = [
//   {
//     name: chalk.yellow.bold('Category 1: Scans'),
//     value: 'CATEG1',
//     disabled: true, // This makes the category header unselectable
//   },
//   {
//     name: chalk.cyan(" TCP Port Scan") + chalk.gray(" - Check open TCP ports"),
//     value: "tcpScan",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" UDP Port Scan") + chalk.gray(" - Discover open UDP ports"),
//     value: "udpScan",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" Email Hunter") +
//       chalk.gray(" - Find emails using theHarvester"),
//     value: "emailFinder",
//     dependencies: ["theHarvester"],
//   },
//   {
//     name: chalk.yellow.bold('Category 1: Scans'),
//     value: 'CATEG1',
//     disabled: true, // This makes the category header unselectable
//   },
//   {
//     name:
//       chalk.cyan(" WHOIS Lookup") +
//       chalk.gray(" - Get domain registration info"),
//     value: "whoisLookup",
//     dependencies: ["whois"],
//   },
//   {
//     name:
//       chalk.cyan(" Domain to IP") + chalk.gray(" - Resolve domain name to IP"),
//     value: "domaintoIP",
//     dependencies: ["nslookup", "dig"],
//   },
//   {
//     name: chalk.cyan(" IP to Domain") + chalk.gray(" - Reverse DNS lookup"),
//     value: "IPtoDomain",
//     dependencies: ["host", "nslookup"],
//   },
//   {
//     name:
//       chalk.cyan(" XMAS Scan") +
//       chalk.gray(" - Stealth scan to bypass firewalls"),
//     value: "xmasScan",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" Host Discovery") +
//       chalk.gray(" - Find live hosts on the network"),
//     value: "pingScan",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" OS Fingerprinting") +
//       chalk.gray(" - Detect target operating system"),
//     value: "osFingerprinting",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" Service Version Detection") +
//       chalk.gray(" - Find out what service/version is running on a port"),
//     value: "serviceVersion",
//     dependencies: ["nmap"],
//   },
//   {
//     name:
//       chalk.cyan(" DNS Enumeration") + chalk.gray(" - subdomain enumerator"),
//     value: "dnsRecon",
//     dependencies: ["dnsrecon"],
//   },
//   {
//     name:
//       chalk.cyan(" Traceroute") +
//       chalk.gray(" - discover network path to target"),
//     value: "traceroute",
//     dependencies: ["traceroute"],
//   },
//   {
//     name:
//       chalk.cyan("🔐 SSL Cert Info") +
//       chalk.gray(" - get SSL certificate details"),
//     value: "sslCert",
//     dependencies: ["openssl"],
//   },
//   {
//     name: chalk.red(" Exit") + chalk.gray(" - Close the tool"),
//     value: "exit",
//     dependencies: [],
//   },
// ];

const chalk = require("chalk");

module.exports = [
  // 🛰️ Host Discovery
  {
    name: chalk.yellow.bold('🛰️ Host Discovery'),
    value: 'host_discovery',
    disabled: true,
  },
  {
    name: chalk.cyan("ICMP Echo Scan") + chalk.gray(" - Detect a live host" ),
    value: "icmpEcho",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("ICMP Echo Subnet Scan") + chalk.gray(" - Detect  live hosts in a subnet" ),
    value: "icmpEchoBulk",
    dependencies: ["fping"],
  },
  {
    name: chalk.cyan("TCP+ICMP scan") + chalk.gray(" - Discover live hosts by sending TPC and ICMP packets (bypass firewall)")    ,
    value: "tcpSynHost",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Scan from IP List") + chalk.gray(" - File based live host scan"),
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
    name: chalk.cyan("TCP Connect Scan") + chalk.gray(" - Full 3-way handshake"),
    value: "tcpConnect",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("UDP Port Scan") + chalk.gray(" - Detect open UDP ports"),
    value: "udpScan",
    dependencies: ["nmap"],
  },

  // 🕵️ Stealth & Bypass Scans
  {
    name: chalk.yellow.bold('🕵️ Stealth (Avoid detection)' ),
    value: 'port_stealth',
    disabled: true,
  },
  {
    name: chalk.cyan("SYN Stealth Scan") + chalk.gray(" - Semi-open scan"),
    value: "tcpStealth",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("FIN Scan") + chalk.gray(" - Sneaky firewall evasion"),
    value: "finScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("XMAS Scan") + chalk.gray(" - Sets unusual TCP flags"),
    value: "xmasScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("NULL Scan") + chalk.gray(" - No flags, confuse firewalls"),
    value: "nullScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("ACK Scan") + chalk.gray(" - Check filtering rules"),
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
    name: chalk.cyan("Fragment Packets") + chalk.gray(" - Break scan into small pieces"),
    value: "packetFragment",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Use Decoys") + chalk.gray(" - Hide your IP with fake ones"),
    value: "decoyScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Source Port Spoof") + chalk.gray(" - Use trusted port like 53"),
    value: "sourcePortScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Idle/Zombie Scan") + chalk.gray(" - Scan via third-party host"),
    value: "idleScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("MAC Spoofing") + chalk.gray(" - Change your MAC address"),
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
    name: chalk.cyan("Detect Services") + chalk.gray(" - Running on open ports"),
    value: "serviceDetection",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Detect Versions") + chalk.gray(" - Software versions"),
    value: "versionDetection",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Fingerprint Services") + chalk.gray(" - Identify unknown services"),
    value: "fingerprintService",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Banner Grabbing") + chalk.gray(" - Auto banner detection"),
    value: "bannerGrab",
    dependencies: ["nmap"],
  },

  // 🧠 OS Detection
  {
    name: chalk.yellow.bold('🧠 OS Detection'),
    value: 'os_detection',
    disabled: true,
  },
  {
    name: chalk.cyan("Guess OS") + chalk.gray(" - TCP/IP stack behavior"),
    value: "osGuess",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("OS Uptime") + chalk.gray(" - Vendor, type & uptime"),
    value: "osUptime",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Network Distance") + chalk.gray(" - Estimate hops"),
    value: "osDistance",
    dependencies: ["nmap"],
  },

  // 🛠️ Scripting & Enumeration
  {
    name: chalk.yellow.bold('🛠️ Scripting & Enumeration'),
    value: 'scripting_enum',
    disabled: true,
  },
  {
    name: chalk.cyan("Default Vuln Scripts") + chalk.gray(" - Common NSE scripts"),
    value: "defaultVulnScripts",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Enumerate SMB") + chalk.gray(" - Users/Shares"),
    value: "smbEnum",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Brute-force Login") + chalk.gray(" - SSH/FTP/etc."),
    value: "bruteLogin",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Full Web Scan") + chalk.gray(" - title/methods/etc."),
    value: "webScan",
    dependencies: ["nmap"],
  },

  // 📶 Latency / Reachability (Fping)
  {
    name: chalk.yellow.bold('📶 Fping Utilities'),
    value: 'fping_util',
    disabled: true,
  },
  {
    name: chalk.cyan("Parallel Ping") + chalk.gray(" - Ping multiple hosts"),
    value: "fpingMulti",
    dependencies: ["fping"],
  },
  {
    name: chalk.cyan("Ping from File") + chalk.gray(" - Report alive only"),
    value: "fpingFile",
    dependencies: ["fping"],
  },
  {
    name: chalk.cyan("Custom Count Ping") + chalk.gray(" - Define ping number"),
    value: "fpingCount",
    dependencies: ["fping"],
  },
  {
    name: chalk.cyan("Fast ICMP Sweep") + chalk.gray(" - Quick network check"),
    value: "fpingSweep",
    dependencies: ["fping"],
  },

  // 🔐 SSL / WHOIS / DNS / Traceroute / Emails
  {
    name: chalk.yellow.bold('🔐 SSL / DNS / WHOIS / Email'),
    value: 'ssl_misc',
    disabled: true,
  },
  {
    name: chalk.cyan("SSL Cert Info") + chalk.gray(" - Check cert details"),
    value: "sslCert",
    dependencies: ["openssl"],
  },
  {
    name: chalk.cyan("WHOIS Lookup") + chalk.gray(" - Domain info"),
    value: "whoisLookup",
    dependencies: ["whois"],
  },
  {
    name: chalk.cyan("DNS Enumeration") + chalk.gray(" - Subdomain enum"),
    value: "dnsRecon",
    dependencies: ["dnsrecon"],
  },
  {
    name: chalk.cyan("Email Finder") + chalk.gray(" - theHarvester"),
    value: "emailFinder",
    dependencies: ["theHarvester"],
  },

  {
    name: chalk.cyan("Traceroute") + chalk.gray(" - Network path to target"),
    value: "traceroute",
    dependencies: ["traceroute"],
  },

  // 🔐 Firewall Evasion
  {
    name: chalk.yellow.bold('🧨 Firewall & IDS Evasion'),
    value: 'fw_evasion',
    disabled: true,
  },
  {
    name: chalk.cyan("Detect Firewall") + chalk.gray(" - Blocked packets"),
    value: "fwDetect",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Fragment Packets") + chalk.gray(" - Bypass inspection"),
    value: "packetFragment",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Use Decoys") + chalk.gray(" - Hide your IP"),
    value: "decoyScan",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Spoof MAC") + chalk.gray(" - Change MAC address"),
    value: "macSpoof",
    dependencies: ["nmap"],
  },

  // 📄 Output & Automation
  {
    name: chalk.yellow.bold('📄 Output & Automation'),
    value: 'output_auto',
    disabled: true,
  },
  {
    name: chalk.cyan("Save Output") + chalk.gray(" - XML / JSON / TXT"),
    value: "saveOutput",
    dependencies: ["nmap"],
  },
  {
    name: chalk.cyan("Verbose + Log") + chalk.gray(" - Log to file"),
    value: "verboseLog",
    dependencies: ["nmap"],
  },
  {
    name:  chalk.cyan("Targets from File") + chalk.gray(" - Import input list"),
    value: "importTargets",
    dependencies: ["nmap"],
  },

  // 🚨 Exit
  {
    name: chalk.red("🚪 Exit") + chalk.gray(" - Close the tool"),
    value: "exit",
    dependencies: [],
  },
];

