import React, { useState } from "react";

export default function Counter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<span>{count}</span>
			<button onClick={() => setCount(count + 1)}>Inc</button>
		</div>
	);
}
