import { exec } from 'child_process';
import {promisify} from "util";

const run = promisify(exec);


export async function runNmap(target){
  const rawOutput = await run(`nmap ${target}`);
  const result = 
  {
    tool : "nmap",
    output : rawOutput.stdout,
    error : rawOutput.stderr
  }
  return result;
}
