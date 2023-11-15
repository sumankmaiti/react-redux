import React, { useReducer } from "react";

// const InitialValue = 0
const initialCounter = {
	count: 0,
	count2: 10
}

const reducer = (counter, action) => {
	switch(action.type) {
		case 'increment':
			// return count + 1
			return {...counter, count: counter.count + action.value}
		case 'decrement':
			// return count - 1
			return {...counter, count: counter.count - action.value}
		case 'increment2':
			// return count + 1
			return {...counter, count2: counter.count2 + action.value}
		case 'decrement2':
			// return count - 1
			return {...counter, count2: counter.count2 - action.value}
		case 'reset':
			return initialCounter
		default:
			// return count
			return counter
	}
}

const UseReducer = () => {
	const [countObj, dispatch] = useReducer(reducer, initialCounter)
	const [countObj2, dispatch2] = useReducer(reducer, initialCounter)

	return(
		<div>
			<div>{countObj.count}</div>
			<button onClick={() => dispatch({type: 'increment', value : 1})}>Increment</button>
			<button onClick={() => dispatch({type: 'decrement', value : 1})}>Decrement</button>

			<div>{countObj.count2}</div>
			<button onClick={() => dispatch({type:'increment2', value: 2})}>Increment</button>
			<button onClick={() => dispatch({type:'decrement2', value: 2})}>Decrement</button>
			<button onClick={() => dispatch({type:'reset'})}>Reset</button>

			<div>{countObj2.count2}</div>
			<button onClick={() => dispatch2({type:'increment2', value: 2})}>Increment</button>
			<button onClick={() => dispatch2({type:'decrement2', value: 2})}>Decrement</button>
			<button onClick={() => dispatch2({type:'reset'})}>Reset</button>
		</div>
	)
}

export default UseReducer