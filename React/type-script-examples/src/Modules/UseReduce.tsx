import { useReducer } from "react"

type stateType = {
	count: number
}

type update = {
	type: 'increment' | 'decrement'
	value:number
}

type reset = {
	type: 'reset'
}

const initialValue = {count: 0}

function reducer(state: stateType, action: update | reset) {
	switch(action.type){
		case 'increment': 
			return { count: state.count + action.value }
		case 'decrement': 
			return { count: state.count - action.value }
		case 'reset':
			return initialValue
		default:
			return state
	}
}

export const UseReduce = () => {
	
	const[state, dispatch] = useReducer(reducer, initialValue)

	return(
		<div>
			<div>{state.count}</div>
			<button onClick={() => dispatch({type:'increment', value:10})}> Increment </button>
			<button onClick={() => dispatch({type:'decrement', value:1})}> Decrement </button>
			<button onClick={() => dispatch({type:'reset'})}> Reset </button>
		</div>
	)
}