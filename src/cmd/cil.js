import { exec } from "child_process";
import { generate } from "../agenAi/openRouter.js";

export function getGitDiff(directory) {
  exec("pwd", (error, stdout, stderr) => {
    changeDirectory(stdout);
  });
}

function changeDirectory(test) {
  const cmd = "git diff";
  console.log(test);
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing command: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error output: ${stderr}`);
      return;
    }

    generate(stdout);
  });
}
