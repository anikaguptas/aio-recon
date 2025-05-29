import { exec } from 'child_process';
import {promisify} from "util";

const run = promisify(exec);


export async function runWhois(target){
  const rawOutput = await run(`whois ${target}`);
  const result = {
    tool : "whois",
    output : rawOutput.stdout,
    error : rawOutput.stderr
  }
return result;
}

