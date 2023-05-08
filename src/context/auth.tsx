import React, {ReactNode, createContext, useContext, useState} from 'react'
import { AuthParams, User } from 'types/auth'
import * as auth from '../requst/auth'
interface AuthContext {
    login: (params: AuthParams) => void
    resister: (params: AuthParams) => void
    logout: () => void,
    user: User | null
}

const Auth = createContext<AuthContext | null>(null)

// Auth.Provider

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<User|null>(null)
    const login = (params: AuthParams) => auth.login(params).then(res => setUser(res.data))
    const resister = (params: AuthParams) => auth.register(params).then(res => setUser(res.data))
    const logout = () => auth.logout().then(()=>setUser(null))
    return (
        <Auth.Provider value={{login,resister,logout,user}}>
            {children}
        </Auth.Provider>
    )
}

export const AuthContext = ():AuthContext  => {
    const userContext = useContext(Auth)
    return userContext!
}
