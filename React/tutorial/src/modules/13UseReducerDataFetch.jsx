import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";

const initialValue = { 
	loading: true,
	error: '',
	post : {} 
}

const reducer = (data, action) => {
	switch(action.status) {
		case 'successful':
			return {
				loading: false,
				error: '',
				post : action.payload
			}
		case 'failed':
			return {
				loading: false,
				error: "Failed to fetch data",
				post : {}
			}
		default:
			return data
	}
} 

const UseReducerDataFetch = () => {
	const [id, setID] = useState(0)
	const [obj, dispatch] = useReducer(reducer, initialValue)

	useEffect(() => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
		.then( (response) => {
			dispatch({
				status : 'successful', 
				payload : response.data
			})
		})
		.catch(() => {
			dispatch({
				status:'failed'
			})
		})
	}, [id])
	return(
		<div>
			{obj.loading ? "LOADING......................." : null}
			{obj.error}
			{obj.post ? obj.post.title : null}
			<input type='text' onChange={(e) => setID(e.target.value)} />
		</div>
	)
}

export default UseReducerDataFetch