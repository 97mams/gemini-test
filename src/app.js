import readline from "node:readline";
import { generate } from "./agenAi/openRouter.js";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Entrez votre prompte: \n \x1b[32m + \x1b[0m", (prompt) => {
  generate(prompt);
  rl.close();
});
