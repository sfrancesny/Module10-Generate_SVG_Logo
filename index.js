// index.js
import { generateLogo } from "./logoGenerator";

(async () => {
  try {
    await generateLogo();
  } catch (error) {
    console.error("Error:", error);
  }
})();
