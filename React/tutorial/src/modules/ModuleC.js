import React, { useContext } from "react";
import { context } from "./ReduceWithContext";
// import {Name, Title} from "./UseContext";

function ModuleC() {

	// const user = useContext(Name)
	// const title = useContext(Title)
	const countContext = useContext(context)
	
	return(
		<div>
			{/* {user} - {title} */}
			<button onClick={() => countContext.contextDispatch({type:'increment', value: 2})}>Increment</button>
			<button onClick={() => countContext.contextDispatch({type:'decrement', value: 1})}>Decrement</button>
			<button onClick={() => countContext.contextDispatch({type:'reset'})}>Reset</button>
		</div>
	)
}

export default ModuleC