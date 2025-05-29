import { exec } from 'child_process';
import {promisify} from "util";

const run = promisify(exec);


export async function runHost(target){
  const rawOutput = await run(`host ${target}`);
  const result = {
    tool : "host",
    output : rawOutput.stdout,
    error : rawOutput.stderr
  }
return result;
}

