import { createWriteStream, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, basename, extname } from "node:path";
import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import Layout from "./components/layout";

const BUILD_DIR = "dist";

const buildPage = async (filename: string) => {
	if (!existsSync(BUILD_DIR)) {
		mkdirSync(BUILD_DIR);
	}
	const importPath = `./pages/${filename}`;
	const outPath = join(
		process.cwd(),
		BUILD_DIR,
		basename(filename, extname(filename)) + ".html"
	);

	const Contents = (await import(importPath)).default;
	const App = () => (
		<Layout>
			<Contents />
		</Layout>
	);

	const { pipe } = renderToPipeableStream(<App />, {
		// bootstrapScripts: ["bundle.js"],
		onAllReady() {
			console.log(`writing ${outPath}`);
			pipe(createWriteStream(outPath, "utf8"));
		},
	});
};

const main = async () => {
	const pages = readdirSync("./src/pages");
	for (const page of pages) {
		await buildPage(page);
	}
};

main();
