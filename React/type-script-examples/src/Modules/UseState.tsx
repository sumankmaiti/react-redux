import { useState } from "react";
import { Name } from "./Name.type";

type AuthUser = Name

export const User = () => {
	const [user, setUser] = useState<AuthUser | null>()
	
	const handleLogin = () => {
		const full = {
			fname:'suman',
			lname:'maiti'
		}
		setUser({
			fullName:full
		})
	}

	const handleLogout = () => {
		setUser(null)
	}
	
	return(
		<div>
			<button onClick={handleLogin}> Login </button>
			<button onClick={handleLogout}> Logout </button>
			<div>user name: {user?.fullName.fname} {user?.fullName.lname}</div>
		</div>
	)
}