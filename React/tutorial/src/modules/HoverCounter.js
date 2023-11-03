import React from "react";
import HigherOrderComponent from "./HigherOrderComponent";

class HoverCounter extends React.Component {
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
				<label onMouseOver = {this.props.IncrementCounter}>{this.props.greet} {this.props.name} Hovered {this.props.count} times</label>
			</div>
		)
	}
}

export default HigherOrderComponent(HoverCounter, 2)