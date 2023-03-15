import React from "react"

class UpdateLifeCycle extends React.Component {
	constructor(props) {
		super(props)
		this.state = {name:'suman'}
	}

	static getDerivedStateFromProps(props, state){
		console.log("from getDerived of parent")
		return null
	}

	shouldComponentUpdate() {
		console.log("from shouldComponentUpdate of parent");
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log("from getSnapshotBeforeUpdate of parent");
		return null
	}

	componentDidUpdate() {
		console.log("from componentDidUpdate of parent");
	}

	Update = () => {
		console.log("onClick event");
		this.setState({name:'maiti'})
	}

	render(){
		return(
			<div>
				console.log("from render of parent")
				<button onClick={this.Update}> Update State </button>
			</div>
			
		)
	}
}

export default UpdateLifeCycle