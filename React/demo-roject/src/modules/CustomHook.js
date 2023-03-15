import React from "react";
import CustomHookCommon from "./CustomHookCommon";

function CustomHook() {

	const[count, increment, decrement, reset] = CustomHookCommon()

	return(
		<div>
			<h2>Count - {count} </h2>
			<button onClick={increment}> Increment </button>
			<button onClick={decrement}> Decrement </button>
			<button onClick={reset}> Reset </button>
		</div>
	)
}

export default CustomHook