import React from "react";

export default function BaseLayout({ children }) {
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
