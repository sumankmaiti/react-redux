import React, { useEffect, useState } from "react";
import axios from "axios";

function FetchData() {
	// const [post, setPost] = useState([])
	const [post, setPost] = useState({})
	const [id, setId] = useState(1)
	const [button_id, button_setId] = useState(1)
	
	const changeID = () => {
		// let id = document.getElementById('text').value
		button_setId(id)
		// setId(id)
	}

	useEffect(
		() => {
			axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(result => {
				setPost(result.data)
				console.log(result);
				})
			.catch(error => console.log(error))
		}, [button_id])
	return(
		<div>
			<input type='text' onChange={e => setId(e.target.value)} /> 
			{/* <input type='text' id='text' /> */}
			<button onClick={changeID}> Fetch data </button>
			{/* {post.map(item => <li key={item.id}> {item.title} </li>)} */}
			{post.title}
		</div>
	)
}

export default FetchData