import React from "react";
import { hydrateRoot } from "react-dom/client";
import "./styles.css";

const PAGE_MAP = {
	index: () => import("../pages/index"),
	about: () => import("../pages/about"),
};

(async () => {
	const pageId = document.body.dataset.page;
	console.log(`hydrating page with id '${pageId}'`);
	if (pageId && pageId in PAGE_MAP) {
		const App = (await PAGE_MAP[pageId]()).default;
		hydrateRoot(document.body, <App />);
	}
})();
