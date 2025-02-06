import React from "react";
import Counter from "../components/counter";

console.log("DEBUG: importing index.tsx");

export default function IndexPage() {
	return (
		<main>
			<h1>Hello, World!</h1>
			<p>This is the index page!</p>
			<Counter />
		</main>
	);
}
