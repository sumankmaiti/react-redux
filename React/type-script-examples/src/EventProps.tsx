import React from "react"

type event = {
	eventHandler?: (e:React.MouseEvent<HTMLButtonElement>) => void
	eventHandlerChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

export const EventProps = (props:event) => {
	return(
		<div>
			<input type='text' onChange={props.eventHandlerChange} />
			<button onClick={props.eventHandler}> Click Here </button>
		</div>
	)
}