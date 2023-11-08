import React, { useState } from "react";

const UseEffectCleanup = () => {
	const [toggle, setToggle] = useState(false)
	
	
	return (
		<div>
			<button onClick={() => setToggle(true)}>Start</button>
			<button onClick={() => setToggle(false)}>Stop</button>
			<button>Reset</button>
		</div>
	)
}