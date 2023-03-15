import React from "react";

const list = ['suman', 'kalyan', 'maiti']
function Column() {
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

export default Column;