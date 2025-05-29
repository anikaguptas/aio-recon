#!/usr/bin/env node

import { exec } from "child_process";

import { promisify } from "util";

import inquirer from "inquirer";

import chalk from "chalk";

import {runNmap} from './nmap.js'
import {runWhois} from './whois.js'
import {makePDF} from './pdfMaker.js'
import {runHost} from './host.js'
import {runDnsrecon} from './dnsrecon.js'
import {runTheharvester} from './theHarvester.js'


const run = promisify(exec);

const tools = [
  { name: "nmap", installCmd: "apt install nmap -y" },

  { name: "theHarvester", installCmd: "apt install theharvester -y" },

  { name: "whois", installCmd: "apt install whois -y" },

  { name: "whatweb", installCmd: "apt install whatweb -y" },
];

async function is_installed(cmd) {
  try {
    await run(`command -v ${cmd}`);

    return true;
  } catch {
    return false;
  }
}

async function check_deps() {
  let missing = [];

  for (let tool of tools) {
    let res = await is_installed(tool.name);

    if (!res) missing.push(tool);
  }

  if (missing.length == 0) {
    console.log(chalk.green("All dependencies installed"));

    return;
  }

  console.log(chalk.yellow("Missing tools:"));

  missing.forEach((t) => {
    console.log("- " + t.name);
  });

  let ans = await inquirer.prompt([
    {
      type: "confirm",

      name: "shouldinstall",

      message: "install now?",

      default: true,
    },
  ]);

  if (ans.shouldinstall) {
    for (let tool of missing) {
      try {
        console.log(chalk.cyan("\nInstalling " + tool.name));

        let { stdout, stderr } = await run(tool.installCmd);

        console.log(stdout || stderr);

        console.log(chalk.green(tool.name + " installed"));
      } catch (err) {
        console.log(
          chalk.red("could not install " + tool.name + ": " + err.message)
        );

        console.log(chalk.yellow("check network connectivity"));
      }
    }
  } else {
    console.log(chalk.red("tools missing. quitting"));

    process.exit(1);
  }
}

async function main() {
  if (process.getuid && process.getuid() !== 0) {
    console.log(chalk.cyan("run with sudo"));

    process.exit(1);
  }

  await check_deps();

  const targetIP = "8.8.8.8";
  const targetDomain = "ayuswasth.com";
  const results = [];
  // results.push(await runNmap(targetDomain));
  // results.push(await runWhois(targetDomain));
  // results.push(await runTheharvester(targetDomain));
  results.push(await runHost(targetDomain));
  results.push(await runDnsrecon(targetDomain));
  makePDF(results);

  console.log(chalk.green("Report generated!"));

}

main();
