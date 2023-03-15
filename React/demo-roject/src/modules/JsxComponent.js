import React from "react";

// making a html tag using jsx(javascript XML)
// const Jsx = () => {
// 	return (
// 		<div>
// 			<h1> This is JSX component </h1>
// 		</div>
// 	);
// }

// making html tag using react class
const Jsx = () => {
	return React.createElement('div', {id:'jsx', className:'jsx', style:{color:'red', fontSize:'100px'}}, 'This is react component');
}

export default Jsx;