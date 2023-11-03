import React from "react"

class MountLifeCycle extends React.Component {
	constructor(props){
		super(props)
		this.state = {name : 'suman'}
		console.log("from constructor of parent")
	}

	static getDerivedStateFromProps(props, state){
		console.log("from getDerived of parent")
		return null
	}

	componentDidMount() {
		console.log("from componentDidMount of parent")
	}

	render(){
		return(
			console.log("from render of parent")
		)
	}
}

export default MountLifeCycle