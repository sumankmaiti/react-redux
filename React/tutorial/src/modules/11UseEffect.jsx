import React, { useEffect, useState } from 'react'

const UseEffect = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log("useEffect called");
		document.title = `Clicked ${count} times`
	})

	return(
		<div>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
		</div>
	)
}

const UseEffectDependent = () => {
	const [count, setCount] = useState(0)
	const [name, setCname] = useState('')

	useEffect(() => {
		console.log("UseEffectDependent called");
		document.title = `Clicked ${count} times.`
	}, [count])

	return(
		<div>
			Name: {name}
			<input type="text" value={name} onChange={(e) => setCname(e.target.value)} />
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
		</div>
	)
}

const UseEffectEmptyDependency = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		console.log("UseEffectEmptyDependency called");
		document.title = `Clicked ${count} times`
	}, [])

	return(
		<div>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>Clicked {count} times</button>
		</div>
	)
}

export {UseEffect, UseEffectDependent, UseEffectEmptyDependency}