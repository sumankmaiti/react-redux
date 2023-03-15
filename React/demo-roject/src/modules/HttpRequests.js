import React from "react";
import axios from "axios";

class HttpRequest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			errorMsg: ''
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then((response) => {
			console.log(response)
			this.setState({
				data:response.data
			})
		})
		.catch((response) => {
			console.log(response);
			this.setState({
				errorMsg:'Data not found'
			})
		})
	}

	render() {
		const {data, errorMsg} = this.state
		return(
			<div>
				{
					data.length ? 
					data.map( item => <div key={item.id}> {item.title} </div>) :
					null	
				}
				{
					errorMsg
				}
			</div>
		)
	}
}

export default HttpRequest