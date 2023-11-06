import React from "react";

const list = ['suman', 'kalyan', 'maiti']

const FragmentColumn = () => {
	
	return (
		list.map(
			(item, index) => {
				return(
					<React.Fragment key={index}>
						<td> {item} </td>
					</React.Fragment>
				)
			}
		)
	)
}

export default FragmentColumn;