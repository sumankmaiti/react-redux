import React from "react";

function PersonViewer(props) {
	return <h1> {props.person.name} and {props.person.age} </h1>;
}

export default PersonViewer;