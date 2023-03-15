import React from "react";

// using function
// const PropsCompFunc = props => {
// 	return (
// 	<div>
// 		<h1> Hello {props.name} {props.company}</h1>
// 		{props.children}
// 	</div>
// 	);
// }

// using class
class PropCompClass extends React.Component {
	render() {
		return (
			<div>
				<h1> Hello {this.props.name} from {this.props.company} </h1>
				{this.props.children}
			</div>
		);
	}
}

// export default PropsCompFunc;
// export default PropCompClass;