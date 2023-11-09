import React, { createContext } from "react";
import ModuleA from "./12ModuleA";

export const NameContext = createContext()

const UseContext = () => {
	const name = "suman"
	const title = "maiti"

	return (
		<div>
			<NameContext.Provider value={{name, title}}>
				<ModuleA />
			</NameContext.Provider>
		</div>
	)
}

export default UseContext