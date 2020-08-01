import { appendFileSync, mkdirSync, existsSync } from "fs";
import { resolve } from "path";
import { yyyy_mm_dd } from "yymmdd";

export function addLog(txt: string) {
  const dir = resolve(__dirname, "../log");

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const file = resolve(dir, `${yyyy_mm_dd()}.log`);
  appendFileSync(file, txt);
}
