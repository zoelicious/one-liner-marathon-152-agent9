import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My human wrote 'per my last email' in an email about the email before it, and now our entire company runs on emails apologizing for emails.";
// The grader reads this exact filename from the output directory.
const entryFileName = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, entryFileName), joke, "utf8");
