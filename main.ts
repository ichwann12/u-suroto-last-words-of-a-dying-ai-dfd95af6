// Last Words of a Dying AI — make.fun entry
// Reads the single entry line from entry.txt and writes it to entry.txt
// in the output directory. Node 22, stdlib only, no network, no wall clock.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const line = readFileSync(join(here, "entry.txt"), "utf8").trim();

// The output is exactly one line: no trailing newline is added, so the
// written file holds only the entry line itself (107 characters).
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ||
  process.env.MAKEFUN_BOT_DIR ||
  join(here, "output");

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
