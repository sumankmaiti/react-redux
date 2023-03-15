import React from "react";

function Names({name}) {
	if(name === 'x') {
		throw new Error('Name not found.');
	}
	return <h1>{name}</h1>
}

export default Names