import React from "react";

const HigherOrderComponent = (WrappedComponent, add) => {
	class UpdatedComponent extends React.Component {
		constructor(props) {
			super(props)
			this.state = { count : 0 }
		}
	
		IncrementCounter = () => {
			this.setState((prevState) => {
				return { count : prevState.count + add }
			})
		}

		render() {
			return <WrappedComponent name = 'suman' count = {this.state.count} IncrementCounter = {this.IncrementCounter} {... this.props} />
		}
	}
	return UpdatedComponent
}

export default HigherOrderComponent