import React from "react";

const RefForwordChild = React.forwardRef(
	(props, ref) => {
		return(
			<input type='text' ref={ref} />
		)
	}
)

export default RefForwordChild