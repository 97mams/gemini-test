import { exec } from "child_process";

export function getGitDiff() {
  exec("pwd", (error, stdout, stderr) => {
    changeDirectory(stdout);
  });
}

function changeDirectory(test) {
  const cmd = "cd " + test;
  console.log(cmd);
  exec(cmd, (error, stdout, stderr) => {
    console.log("itp", stdout);
  });
}
