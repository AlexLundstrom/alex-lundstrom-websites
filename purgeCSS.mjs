import { PurgeCSS } from "purgecss";

const results = await new PurgeCSS().purge({
  content: ["**/*.html"],
  css: ["css/*.css"],
  rejected: true,
});

console.log(results[0].rejected);