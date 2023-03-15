import React from "react";

class SetStateComp extends React.Component {
	constructor(){
		super();
		this.state = {count:0}
	}

	Increment() {
		// this.setState(
		// 	{count: this.state.count + 1},
		// 	() => {  // -- this is a callback function to execute after update
		// 		console.log('callback' + this.state.count) 
		// 	}
		// );
		// console.log(this.state.count);

		this.setState((prevState) => ({
			count: prevState.count + 1
			}), () => {  // -- this is a callback function to execute after update
				console.log('callback' + this.state.count) 
				}
			);
	}

	IncrementFive() {
		this.Increment();
		this.Increment();
		this.Increment();
		this.Increment();
		this.Increment();
	}
	
	render(){
		return (
			<div>
				<h1> count -> {this.state.count} </h1>
				<button onClick={this.IncrementFive}> Increment </button>
			</div>
		);
	}
}

export default SetStateComp;