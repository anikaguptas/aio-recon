import { exec } from 'child_process';
import { promisify } from 'util';

//FIX THE REGEX//

const run = promisify(exec);

export async function runTheharvester(target) {
  const rawOutput = await run(`theHarvester -d ${target} -b all 2>&1`); // capture stderr too

  const lines = rawOutput.stdout.split('\n');

  const filteredLines = lines.filter(line => {
    const lower = line.toLowerCase();

    // Filter out noisy lines
    if (
      lower.includes('missing api key') ||
      lower.includes('exception') ||
      lower.includes('error') ||
      lower.includes('captcha') ||
      lower.includes('failed') ||
      lower.includes('cannot connect') ||
      lower.trim() === ''
    ) return false;

    // Keep meaningful lines
    if (
      line.startsWith('[*]') ||
      line.startsWith('---') ||
      /^\s*[-=]{3,}\s*$/.test(line) ||
      /\b(\d{1,3}\.){3}\d{1,3}\b/.test(line) || // IP addresses
      line.includes('@') ||                    // emails
      line.match(/https?:\/\/\S+/) ||          // URLs
      line.match(/\b(found|found:|found\s+\d+)/i) // summary counts
    ) {
      return true;
    }

    return false;
  });

  const cleanedOutput = filteredLines.join('\n');

  return {
    tool: "theHarvester",
    output: cleanedOutput,
    error: rawOutput.stderr  // keep stderr in case you want to log it separately
  };
}

