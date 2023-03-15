import React from "react";

class EventBind extends React.Component {
	constructor(){
		super();
		this.state = {greet:'Hi there!'};
		// this.Clicked = this.Clicked.bind(this); // working best now. bind inside constructor 
	}

	// Clicked() {
	// 	this.setState({greet:'Good bye!'});
	// }

	Clicked = () => {             // 2nd best approach experimental now
		this.setState({greet:'Good Bye!'});
	}

	render() {
		return (
			<div>
				<h1> {this.state.greet} </h1>
				<button onClick={this.Clicked}> Click Now </button> 
			</div>
		);
	}
}

export default EventBind;