import React from "react";

const Title = () => {
	console.log('Rendering Title');
	return(
		<div>
			This is title module.
		</div>
	)
}

export default React.memo(Title)