import React from "react";

class State extends React.Component {
	constructor() {
		super();
		this.state = {
			msg:'Hi there!'
		};
	}
	
	ChangeContent(){
		this.setState({msg:'You clicked on the button'});
	}

	render (){
		return(
		<div>
		    <h1> {this.state.msg} </h1>
			<button onClick={() => this.ChangeContent()}> Don't click </button>
		</div>
		);
		
	}
}

// using function
// let s = {msg:'Hi there!'};

// function ChangeContent(){
// 	s.msg = "you are welcome";
// }

// const StateFunc = () => {
// 	return (
// 	<div>
// 		<h1> {s.msg} from function </h1>
// 		<button onClick={() => ChangeContent()}> Don't click </button>
// 	</div>
// 	);
// }

export default State;
// export default StateFunc;