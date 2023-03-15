import { useState } from "react";

function InputHandler() {
	const [value, setValue] = useState('')

	const bind = {
		onChange : e => setValue(e.target.value)
	}

	return [value, bind]
}

export default InputHandler