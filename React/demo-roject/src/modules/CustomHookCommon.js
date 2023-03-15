import { useEffect, useState } from "react"

function CustomHookCommon() {
	const [count, setCount] = useState(0)

	const increment = () => setCount(count + 1)
	const decrement = () => setCount(count - 1)
	const reset = () => setCount(0)

	useEffect(() => {
		document.title = `Count - ${count}`
	},[count])

	return [count, increment, decrement, reset]
}

export default CustomHookCommon