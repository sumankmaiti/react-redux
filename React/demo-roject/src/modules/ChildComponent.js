import React from "react";

function Child(props) {
	return (
		<div>
			{/* <button onClick={props.func}> Child Button </button> take input from parent */}
			<button onClick={() => props.func('Child')}> Greet Parent </button>  {/* pass parameter to parent */}

		</div>
	);
}

export default Child;