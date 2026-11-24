#!/usr/bin/env node
// slop-scan.mjs — zero-dependency scanner for high-confidence AI-slop tells.
// Usage: node slop-scan.mjs <file-or-dir>...
// Exit codes: 0 clean (info-only ok), 2 findings (warning/error), 1 usage/IO error.
// Waive a finding on a line with a comment containing: slop-scan-disable <RULE-ID>|all
import fs from "node:fs";
import path from "node:path";

const EXT = new Set([".html", ".jsx", ".tsx", ".js", ".ts", ".vue", ".svelte", ".astro", ".css", ".mdx"]);
const SKIP_DIRS = new Set(["node_modules", ".git", "dist", "build", ".next", ".cache", "coverage"]);

const lineRules = [
  { id: "GRAD-CLICHE", sev: "warning", re: /linear-gradient\([^)]*(#(?:8B5CF6|7C3AED|A855F7|6366F1|4F46E5|3B82F6|60A5FA|2563EB))/i,
    msg: "purple/violet/blue hex gradient — the #1 AI-slop tell; derive color from the domain instead" },
  { id: "GRAD-TAILWIND", sev: "warning",
    re: /(?:from|to)-(?:indigo|violet|purple|fuchsia)-\d+/i, re2: /to-(?:blue|sky|cyan)-\d+/i,
    msg: "indigo/violet-to-blue Tailwind gradient cliché" },
  { id: "FONT-DEFAULT", sev: "warning", re: /font-?family[^;}]*\b(Inter|Roboto)\b/i,
    msg: "Inter/Roboto as identity font — unchosen default; justify it or pick a face with personality" },
  { id: "COPY-FILLER", sev: "warning",
    re: /\b(seamlessly?|effortlessly?|supercharg\w*|elevate your|unlock the (?:power|potential)|take your [a-z ]{1,30} to the next level|in today'?s fast-paced|game-?chang\w*|revolutioniz\w*|streamline\w*|cutting-edge|state-of-the-art|best-in-class|world-class)\b/i,
    msg: "AI filler vocabulary — write the sentence the user would say about their problem" },
  { id: "PROOF-FAKE", sev: "warning", re: /trusted by [^<]{0,25}\d/i,
    msg: "unverifiable social proof — use real, defensible numbers or none" },
  { id: "DATA-FAKE", sev: "warning", re: /lorem ipsum|test@test\.com|\b(John|Jane) Doe\b/i,
    msg: "placeholder content shipped — replace with domain-true content" },
  { id: "EMOJI-HEADING", sev: "info", re: /<h[123][^>]*>[^<]*\p{Extended_Pictographic}/u,
    msg: "emoji inside a heading — decoration, not information" },
  { id: "EYEBROW-UPPER", sev: "info", re: /class(?:Name)?="[^"]*(uppercase[^"]*tracking-(?:widest|wider|\[0\.[2-9])|tracking-(?:widest|wider|\[0\.[2-9])[^"]*uppercase)[^"]*"/,
    msg: "uppercase wide-tracked eyebrow — one per page maximum, and only with a real label" },
  { id: "ICON-TILE", sev: "info", svg: true,
    re: /class(?:Name)?="[^"]*rounded[^"]*"/, re2: /class(?:Name)?="[^"]*bg-[a-z]+-\d{2,3}\/(?:10|15|20)[^"]*"/,
    msg: "rounded tinted icon tile next to a heading — decorative default; icons should label functions" },
  { id: "ALT-MISSING", sev: "warning", re: /<img\b(?![^>]*\balt\b)(?![^>]*\.\.\.)[^>]*>/i,
    msg: "<img> without alt — accessibility is a hard constraint, not polish" },
];
const fileRules = [
  { id: "BENTO-SPAM", sev: "warning", min: 6, re: /rounded-(?:2xl|\[2rem\]|\[24px\])/g,
    msg: "≥6 rounded-2xl surfaces in one file — bento/card nesting; if everything is boxed, nothing is" },
  { id: "GRADIENT-SPAM", sev: "warning", min: 3, re: /bg-gradient-to-[a-z]+/g,
    msg: "≥3 decorative gradients in one file" },
  { id: "GLASS-SPAM", sev: "info", min: 2, re: /backdrop-blur/g,
    msg: "≥2 backdrop-blur surfaces — simulated depth everywhere" },
];

function walk(p, files) {
  let st;
  try { st = fs.statSync(p); } catch { console.error(`cannot read: ${p}`); process.exitCode = 1; return; }
  if (st.isDirectory()) {
    for (const e of fs.readdirSync(p)) if (!SKIP_DIRS.has(e)) walk(path.join(p, e), files);
  } else if (EXT.has(path.extname(p).toLowerCase())) files.push(p);
}

function scanFile(file) {
  const findings = [];
  let text;
  try { text = fs.readFileSync(file, "utf8"); } catch { return findings; }
  const lines = text.split(/\r?\n/);
  lines.forEach((line, i) => {
    const disabled = /slop-scan-disable/.test(line)
      ? (line.match(/slop-scan-disable\s*(.*)/)[1] || "").trim().split(/[\s,]+/) : [];
    const off = (id) => disabled.includes(id) || disabled.includes("all");
    for (const r of lineRules) {
      if (off(r.id)) continue;
      let hit = false;
      if (r.svg) hit = line.includes("<svg") && r.re.test(line) && r.re2.test(line);
      else if (r.re2) hit = r.re.test(line) && r.re2.test(line);
      else hit = r.re.test(line);
      if (hit) findings.push({ line: i + 1, sev: r.sev, id: r.id, msg: r.msg });
    }
  });
  for (const r of fileRules) {
    const count = (text.match(r.re) || []).length;
    if (count >= r.min) findings.push({ line: 1, sev: r.sev, id: r.id, msg: `${r.msg} (found ${count})` });
  }
  // hover-only interaction: has hover handlers, no focus handlers anywhere
  const hasHover = /onMouse(?:Enter|Over)/.test(text) && /\.(jsx|tsx|js|ts|vue|svelte|astro|html|mdx)/.test(path.extname(file) + file);
  if (hasHover && !/onFocus|focus-visible|focus:ring|:focus\b/.test(text)) {
    findings.push({ line: 1, sev: "warning", id: "HOVER-ONLY", msg: "hover handlers with no focus handling anywhere in the file" });
  }
  // interactive elements without any focus styling
  const interactive = /<button|role="button"|<a\s+href/.test(text) && /\.(html|jsx|tsx|vue|svelte|astro|mdx)$/.test(path.extname(file).toLowerCase());
  if (interactive && !/:focus|focus:ring|focus-visible|onFocus/.test(text)) {
    findings.push({ line: 1, sev: "warning", id: "FOCUS-MISSING", msg: "interactive elements with no visible focus styling in this file" });
  }
  return findings;
}

const args = process.argv.slice(2);
if (!args.length) { console.error("usage: node slop-scan.mjs <file-or-dir>..."); process.exit(1); }
const files = [];
for (const a of args) walk(a, files);
let errors = 0, warnings = 0, infos = 0;
for (const f of files) {
  const found = scanFile(f);
  if (!found.length) continue;
  for (const x of found) {
    const label = x.sev === "error" ? "ERROR" : x.sev === "warning" ? "WARN " : "INFO ";
    console.log(`${f}:${x.line}  [${label}] ${x.id}: ${x.msg}`);
    if (x.sev === "error") errors++; else if (x.sev === "warning") warnings++; else infos++;
  }
}
console.log(`\n${files.length} files scanned — ${warnings} warnings, ${errors} errors, ${infos} info`);
process.exit(errors + warnings > 0 ? 2 : 0);
