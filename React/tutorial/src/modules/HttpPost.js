import React from "react";
import axios from "axios";

class HttpPost extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userId: '',
			title: '',
			body:''
		}
	}

	changeHandler = (e) => {
			this.setState({[e.target.name]: [e.target.value]})
	}

	submitHandler = (e) => {
		e.preventDefault()
		axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
		.then( response =>{
			console.log(response);
			})
		.catch( error => {
			console.log(error);
		})
	}
	
	render() {
		const {userId, title, body} = this.state
		return(
			<div>
				<form onSubmit={this.submitHandler}>
					<div>
						User id: <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
					</div>
					<div>
						title: <input type='text' name='title' value={title} onChange={this.changeHandler}/> <br />
					</div>
					<div>
						body: <input type='text' name='body' value={body} onChange={this.changeHandler}/>
					</div>
					<div>
						<button type="submit" name='submit'> submit </button>
					</div>
				</form>
			</div>
		)
	}
}

export default HttpPost