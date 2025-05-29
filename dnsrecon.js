import { exec } from 'child_process';
import {promisify} from "util";

const run = promisify(exec);

export async function runDnsrecon(target){
  const rawOutput = await run(`dnsrecon -d ${target}`, { encoding: 'utf8' });
  const result = 
  {
    tool : "dnsrecon",
    output : rawOutput.stdout,
    error : rawOutput.stderr
  }
  return result;
}
