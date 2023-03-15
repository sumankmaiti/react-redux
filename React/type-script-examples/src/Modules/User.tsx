import { useContext } from "react"
import { UserContext } from "./UseContext"

export function User() {
	const handleLogin = () => {
		userContext?.setUser({
			name:'suman',
			email:'suman@maiti.com'
		})
	}
	const handleLogout = () => {
		userContext?.setUser(null)
	}
	
	const userContext = useContext(UserContext)

	return(
		<div>
			<button onClick={handleLogin}> Login </button>
			<button onClick={handleLogout}> Logout </button>
			<div> User Name is: {userContext?.user?.name} </div>
			<div> Email id is: {userContext?.user?.email}</div>
		</div>
	)
}