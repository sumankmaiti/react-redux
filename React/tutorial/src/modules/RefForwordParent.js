import React from "react";
import RefForwordChild from "./RefForwordChild";

class RefForwordParent extends React.Component {
	
	constructor(props) {
		super(props)
		this.InputRef = React.createRef()
	}

	Focus = () => {
		this.InputRef.current.focus()
	}
	
	render() {
		return(
			<div>
				<RefForwordChild ref={this.InputRef} />
				<button onClick={this.Focus}> Focus </button>
			</div>
		)
	}
}

export default RefForwordParent