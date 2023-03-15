import React from "react";
import InputHandler from "./CustomHookUserInputHandle";

function CustomUserInput() {
	const [fname, fbind] = InputHandler()
	const [lname, lbind] = InputHandler()

	const submitHandler = e => {
		e.preventDefault()
		console.log('submit handler')
		console.log(`Hello ${fname} ${lname}`)
	}
	return(
		<div>
			<form onSubmit={submitHandler}>
				<input type = 'text' placeholder="Firstname" {...fbind} />
				<input type = 'text' placeholder="Lastname" {...lbind} />
				<button type = 'submit'> Submit </button>
			</form>
		</div>
	)
}

export default CustomUserInput