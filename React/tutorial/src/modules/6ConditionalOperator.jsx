import React from "react";

const ConditionalRender = () => {
	const user = {isLoggedIn : true}
	
	return(
		<div>
			{user.isLoggedIn ? <div> Hi suman! </div> : <div> Hi Guest </div>}
			{user.isLoggedIn && <div> You are authenticated </div>}
		</div>
	)
}

export default ConditionalRender;