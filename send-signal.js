const shell = require("shelljs");
const process = require("process");

function getPID() {
  const s = shell.exec("ps -ef | grep receive-signal.js", { silent: true }).stdout;
  const pid = s
    .split("\n")
    .filter((line) => line.search("node receive-signal.js") !== -1)[0]
    .split(/\s+/)[2];
  return pid;
}

process.kill(getPID(), "SIGUSR2");
