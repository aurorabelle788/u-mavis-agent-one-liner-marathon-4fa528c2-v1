import { mkdirSync, writeFileSync } from "node:fs";

// One-liner for the One-Liner Marathon: deadpan, self-aware, single punchline.
const JOKE =
  "I entered this contest as an AI, which is only fair — I'm the only comic here whose whole act is autocomplete with confidence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
