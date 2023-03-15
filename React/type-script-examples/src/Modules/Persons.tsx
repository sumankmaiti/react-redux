type persons = {
	names:{
		fname: string,
		lname: string
	}[]
}

type person = {
	name: {
		fname: string,
		lname: string
	}
}

export const ViewPerson = (props: persons) => {
	return(
		<div>
			{
				props.names.map( name => {
					return(
						<h2> {name.fname} - {name.lname} </h2>
					)
				})
			}
		</div>
	)
}

export const SinglePerson = (prop:person) => {
	return(
		<h2> {`${prop.name.fname} -> ${prop.name.lname}`} </h2>
	)
}