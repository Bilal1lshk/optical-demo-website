import { spawn } from "node:child_process";
import http from "node:http";

const child = spawn("npx.cmd", ["next", "start", "-p", "3005"], {
  stdio: "inherit",
  shell: true,
});

child.on("error", (err) => console.error("Child error:", err));
child.on("exit", (code) => console.log("Child exited with code", code));
