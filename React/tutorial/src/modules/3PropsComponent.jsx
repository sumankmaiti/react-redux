import React from "react";

const PropsDestructure = ({name, company}) => {
	return (
	<div>
		<h1> Props destructuring {name} {company}</h1>
	</div>
	);
}

const PropsWithKeywoard = (props) => {
	console.log(props);
	return <div>With Prop keywoard {props.name} {props.address}</div>
}

const PropsWithChildren = (props) => <div>Props with children component {props.children}</div>

export {PropsDestructure, PropsWithKeywoard, PropsWithChildren};