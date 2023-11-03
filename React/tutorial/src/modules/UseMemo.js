import React, { useMemo, useState } from "react";

function UseMemo() {
	const [one, setOne] = useState(0)
	const [two, setTwo] = useState(0)

	const incrementOne = () => {
		setOne(one + 1)
	}

	const incrementTwo = () => {
		setTwo(two + 1)
	}

	const isEven = useMemo(() => {
		let i = 0
		while(i<=200000000) i++
		return one % 2 === 0
	},[one])
	
	return(
		<div>
			<button onClick={incrementOne}> Increment One {one} </button> 
			<div>{isEven ? 'Even' : 'Odd'}</div>
			<button onClick={incrementTwo}> Increment Two {two}</button>
		</div>
	)
}

export default UseMemo