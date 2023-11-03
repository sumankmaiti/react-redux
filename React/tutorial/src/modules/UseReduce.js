import React, { useReducer } from "react";

// const InitialValue = 0
const initialObj = {
	count:0,
	count2:10
}

const reducer = (obj, action) => {
	switch(action.type) {
		case 'increment':
			// return count + 1
			return {...obj, count:obj.count + action.value}
		case 'decrement':
			// return count - 1
			return {...obj, count:obj.count - action.value}
		case 'increment2':
			// return count + 1
			return {...obj, count2:obj.count2 + action.value}
		case 'decrement2':
			// return count - 1
			return {...obj, count2:obj.count2 - action.value}
		case 'reset':
			return initialObj
		default:
			// return count
			return obj
	}
}

function UseReduce() {
	const [countObj, dispatch] = useReducer(reducer, initialObj)
	const [countObj2, dispatch2] = useReducer(reducer, initialObj)

	return(
		<div>
			<div>{countObj.count}</div>
			<button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
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

export default UseReduce