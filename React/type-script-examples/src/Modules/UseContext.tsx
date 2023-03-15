import { createContext, useState } from "react"

type AuthUser = {
	name: string,
	email: string
}

type contextProviderType = {
	children: React.ReactNode
}

type UserType = {
	user: AuthUser | null
	setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<UserType | null>(null)

export const Provider = ({children}: contextProviderType) => {
	const [user, setUser] = useState<AuthUser | null>(null)
	
	return(
		<UserContext.Provider value = {{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}