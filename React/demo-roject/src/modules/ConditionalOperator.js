import React from "react";

class UserGreeting extends React.Component {
	constructor(){
		super();
		this.state = {loggedIn:true}
	}

	render(){
		// if(this.state.loggedIn){
		// 	var user = 'Suman';
		// }
		// else{
		// 	var user = 'Guest';
		// }
		var user = this.state.loggedIn ? 'Suman' : 'Guest'
		return <div> welcome {user} </div>; 
	}
}

export default UserGreeting;