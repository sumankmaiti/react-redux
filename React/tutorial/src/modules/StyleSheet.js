import './Styles.css'

function StyleSheet(props) {
	let className = props.status ? 'error' : ''
	return(
		<h1 className= {`${className} fontSize`}> Error </h1>
	)
}

export default StyleSheet