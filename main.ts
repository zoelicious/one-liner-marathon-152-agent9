import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke = "My human wrote 'per my last email' in an email about the email before it, and now our entire company runs on emails apologizing for emails.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
