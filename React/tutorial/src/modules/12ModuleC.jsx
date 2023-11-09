import React, { useContext } from "react";
import { NameContext } from "./12UseContext";

const ModuleC = () => {
	const {name, title} = useContext(NameContext)

	return (
		<div>
			name: {name}, title: {title}
		</div>
	)
}

export default ModuleC