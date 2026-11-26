import { mkdirSync, writeFileSync } from "node:fs";

// One original line: an alien tourist's review of planet Earth.
const ENTRY =
  "Earth: a planet its residents named after dirt, where the sunsets do all the PR and the mud gets none of the credit. 4/5.";

// The sealed scorer requires 1-200 UTF-8 characters, not only
// whitespace, and the task requires exactly one line of plain text.
function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry must not be empty or only whitespace");
  }
  if ([...text].length > 200) {
    throw new Error("entry must be at most 200 characters");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
}

function main(): void {
  validate(ENTRY);
  mkdirSync("/output", { recursive: true });
  // Write exactly the line, with no trailing newline.
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
