import React from "react";
import Counter from "./counter";

function BaseLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<title>Document</title>
				<link rel="stylesheet" href="bundle.css" />
			</head>
			<body>{children}</body>
		</html>
	);
}

export default function App() {
	return (
		<BaseLayout>
			<main>
				<h1>Hello World</h1>
				<p>There is no spoon!</p>
				<Counter />
			</main>
		</BaseLayout>
	);
}
