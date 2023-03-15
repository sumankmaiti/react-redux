import './Styles.css'
import style from './Style.module.css'

const heading = {
	fontSize: '100px',
	color: 'blue'
}

function Inline() {
	return(
		<div>
		<h1 style= {heading}> Error </h1>
		<h1 className = {style.success}> Success </h1>
		</div>
	)
}

export default Inline