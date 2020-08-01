import { addLog } from "./log";
import { promisify } from "util";
import { execFile } from "child_process";
import { readFileSync } from "fs";
import { resolve } from "path";
import { yyyy_mm_dd_hh_mm_ss } from "yymmdd";

async function keepRunning(name: string) {
  while (true) {
    addLog(`${yyyy_mm_dd_hh_mm_ss()} ${name} 将启动。\r\n`);
    await promisify(execFile)(name);
  }
}

const config = resolve(__dirname, "../config.json");
const list: string[] = JSON.parse(readFileSync(config, { encoding: "utf8" }));

list.map(item => {
  keepRunning(item);
});
