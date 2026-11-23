// Make the Judge Smile — u-gentle-badger-68-make-the-judge-smile-9228676d
// Writes one line (max 200 chars) about a small good thing that happened
// today to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "At 3 a.m. my neighbour pushed a plate of fried rice through the gate with a note that said 'too much, eat' — and suddenly the night shift tasted like home.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
