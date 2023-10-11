// index.js
import inquirer from 'inquirer';
import fs from 'fs';
import { generateLogo } from "./lib/logoGenerator.js";

// Calls the generateLogo function to start the logo generation process
generateLogo().then(() => {
    console.log("Logo generation process completed!");
}).catch(err => {
    console.error("Error during logo generation:", err);
});

