import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import App from "./components/app";

const BUILD_DIR = "dist";
const OUTPUT_FILE = "test.html";

if (!existsSync(BUILD_DIR)) {
	mkdirSync(BUILD_DIR);
}

const { pipe } = renderToPipeableStream(<App />, {
	bootstrapScripts: ["bundle.js"],
	onAllReady() {
		const outPath = join(process.cwd(), BUILD_DIR, OUTPUT_FILE);
		console.log(`writing ${outPath}`);
		pipe(createWriteStream(outPath, "utf8"));
	},
});
