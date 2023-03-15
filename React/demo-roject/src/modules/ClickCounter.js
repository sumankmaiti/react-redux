import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class ClickCounter extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = { count : 0 }
	// }

	// IncrementCounter = () => {
	// 	this.setState((prevState) => {
	// 		return { count : prevState.count + 1 }
	// 	})
	// }

	render() {
		return(
			<div>
				<button onClick={this.props.IncrementCounter}>{this.props.greet} {this.props.name} Clicked {this.props.count} times</button>
			</div>
		)
	}
}

export default HigherOrderComponent(ClickCounter, 1)