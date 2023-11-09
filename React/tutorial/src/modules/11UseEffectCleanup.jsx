import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
	const [toggle, setToggle] = useState(true)
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log("useEffect cleanup called");
		
		const timer = setInterval(() => {
			setCount(prevCount => prevCount + 1)
			}, 1000)
	  
		if (toggle) {
			clearInterval(timer)
	  	}

		return () => {
			console.log("component unmiunting...");
			clearInterval(timer)
		}
	}, [toggle])

	const handleReset = () => {
		setCount(0)
	}
	
	return (
		<div>
			count : {count}
			<button onClick={() => setToggle(false)}>Start</button>
			<button onClick={() => setToggle(true)}>Stop</button>
			<button onClick={handleReset}>Reset</button>
		</div>
	)
}

export default UseEffectCleanup