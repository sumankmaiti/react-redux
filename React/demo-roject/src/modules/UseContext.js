import React, { createContext } from "react";
import ModuleA from "./ModuleA";

export const Name = createContext()
export const Title = createContext()

function UseContext() {
	return(
		<div>
			<Name.Provider value='Suman Kalyan'>
				<Title.Provider value='Maiti'>
					<ModuleA />
				</Title.Provider>
			</Name.Provider>
		</div>
	)
}

export default UseContext