import React, { createContext, useReducer } from "react";
import ModuleA from './12ModuleA'

export const context = createContext()

const initialValue = 0
const reducer = (data, action) => {
	switch(action.type) {
		case 'increment':
			return data + action.value
		case 'decrement':
			return data - action.value
		case 'reset':
			return initialValue
		default:
			return data
	}
}

function ReduceContext() {

	const[count, dispatch] = useReducer(reducer, initialValue)
	return(
		<context.Provider value={{contextCount : count, contextDispatch : dispatch}}>
			<div>
				Count - {count}
				<ModuleA />
			</div>
			</context.Provider>
	)
}

export default ReduceContext