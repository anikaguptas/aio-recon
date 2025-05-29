//NOT WORKING AS OF NOW
import { exec } from 'child_process';
import {promisify} from "util";

const run = promisify(exec);


export async function runTraceroute(target){
  const rawOutput = await run(`traceroute ${target}`);
  const result = 
  {
    tool : "traceroute",
    output : rawOutput.stdout,
    error : rawOutput.stderr
  }
  return result;
}
