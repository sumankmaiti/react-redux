import React, { memo } from "react";

function Title() {
	console.log('Rendering Title');
	return(
		<div>
			This is title module.
		</div>
	)
}

export default memo(Title)