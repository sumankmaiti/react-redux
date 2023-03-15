import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";


const initialValue = { post : {} }

const reducer = (data, action) => {
	switch(action.status) {
		case 'success':
			return {post : action.payload}
		case 'fail':
			return {post : {}}
		default:
			return data
	}
} 

function UseReduceFetch() {
	const [id, setID] = useState(1)
	const [obj, dispatch] = useReducer(reducer, initialValue)

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then( response => {
			dispatch({status : 'success', payload : response.data})
		})
		.catch(dispatch({status:'fail'}))
	}, [id])
	return(
		<div>
			{obj.post ? obj.post.title : ''}
			<input type='text' onChange={(e) => setID(e.target.value)} />
		</div>
	)
}

export default UseReduceFetch