type props = {
	name: string
	tasks?: number
	isLoggedIn: boolean
}

export const Greet = (props: props) => {
	const {tasks = 0} = props
	return(
		<div>
			<h2>
				{props.isLoggedIn 
				? `Welcome ${props.name} ! you have ${tasks} jobs to do.` 
				: `Welcome Guest`}
			</h2>
		</div>
	)
}

// export default Greet