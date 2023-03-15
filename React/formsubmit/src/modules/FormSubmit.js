import { useRef, useState } from 'react'
import {axios} from 'axios'

const FormHandling = () => {
	const [data, setData] = useState({})

	const fnameRef = useRef(null)

	const submitData = (e) => {
		e.preventDefault()
		setData(
			{ 
				fname: fnameRef.current.value,
				lname: e.target.lname.value,
				gender: e.target.gender.value,
				address: e.target.address.value,
				country: e.target.country.value,
				password: e.target.password.value}
		)
		// axios.post('link/of/api', data)
		// .then((res) => {
		// 	console.log(res);
		// 	})
		// .catch((error) => {
		// 	console.log(error);
		// })

	}

	console.log(data);

	return(
		<div>
			<form onSubmit={submitData}>
				First Name: <input type='text' id='fname' ref={fnameRef} /> <br/>
				Last Name: <input type='text' id='lname' /> <br/>
				Gender: 
				<input type='radio' id='male' name='gender' value='male' /> Male
				<input type='radio' id='female' name='gender' value='female' /> Female <br />
				Address: <textarea rows='2' cols='20' id='address'/>
				Country: 
				<select id='country'>
					<option value='india'> India </option>
					<option value='others'> Others </option>
				</select><br />
				Password: <input type='password' id='password' /> <br/>
				<button id='submit' type='submit' > Submit </button>
			</form>
		</div>
	)
}

export default FormHandling