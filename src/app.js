import readline from "node:readline";
import { getGitDiff } from "./cmd/cil.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

getGitDiff();
rl.question("Entrez votre prompte: \n \x1b[32m + \x1b[0m", (prompt) => {
  // generate(prompt);
  rl.close();
});
