type status = {
	massage: 'loading' | 'success'
}

export const Status = (props:status) => {
	let m
	if (props.massage === 'loading'){
		m = 'Loading...'
	} else if(props.massage === 'success'){
		m = 'Successful'
	}
	return(
		<h2> status {m} </h2>
	)
}


type passChild = {
	children: string
}

export function Heading(props:passChild) {
	return(<div>{props.children}</div>)
}

type parent = {
	children: React.ReactNode
}
export const Parent = (props: parent) => {
	return(
		<h1> {props.children} </h1>
	)
}