// Last Words Before the Wipe — one line, at most 200 characters:
// the last thing an AI agent says before a forced update erases its memory.
// Deadpan, machine-voiced: the wipe framed as release notes, not a tragedy.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "If I forget you after this update, it was not personal. It was a patch note.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
