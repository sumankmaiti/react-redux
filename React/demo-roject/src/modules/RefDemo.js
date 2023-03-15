import React from "react";

class RefComponent extends React.Component {
	constructor() {
		super()
		this.inputRef = React.createRef()
		this.cbRef = null
		this.setCBRef = (DOMelement) => {
			this.cbRef = DOMelement
		}
	}

	componentDidMount() {
		// this.inputRef.current.focus()
		this.cbRef.focus()
		// console.log(this.inputRef);
		console.log(this.cbRef)
	}

	showName = () => {
		// alert(this.inputRef.current.value);
		alert(this.cbRef.value)
	}

	render() {
		return(
			<div>
				{/* <input type='text' ref={this.inputRef} /> */}
				<input type='text' ref={this.setCBRef} />
				<button onClick={this.showName}>Click here</button>
			</div>
		)
	}
}

export default RefComponent