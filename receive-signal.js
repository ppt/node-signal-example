const process = require("process");

console.log(`Process ID: ${process.pid}`);

process.on("SIGUSR2", () => {
  console.log("Received SIGAL SIGUSR2.");
});

setTimeout(() => console.log("END"), 60000);
