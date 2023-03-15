import React from "react";
import Child from "./ChildComponent";

class ParentClass extends React.Component {
	constructor(){
		super(); 
		this.val = 'parent';
		this.Clicked = this.Clicked.bind(this); // working best now. bind inside constructor 
	}

	// Clicked() {
	// 	this.setState({greet:'Good bye!'});
	// }

	Clicked = (childName) => { 
		console.log("this is " + this.val + ' of ' + childName);
	}

	render() {
		return (
			<div>
				<h1> {this.val} </h1>
				<Child func = {this.Clicked} />
			</div>
			
		);
	}
}

export default ParentClass;