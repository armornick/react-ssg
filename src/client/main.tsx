import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "../components/app";

import "./styles.css";

const msg = async () => (await import("./msg")).default;
setTimeout(async () => {
	const message = await msg();
	console.log(message);
}, 1200);

hydrateRoot(document, <App />);
