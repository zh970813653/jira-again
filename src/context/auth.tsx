import React, {ReactNode, createContext, useContext, useEffect, useState} from 'react'
import { AuthParams, User } from 'types/auth'
import * as auth from '../requst/auth'
interface Auth_Context {
    login: (params: AuthParams) => void
    resister: (params: AuthParams) => void
    logout: () => void,
    user: User | null
}

const Auth = createContext<Auth_Context | null>(null)

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<User|null>(null)
    const login = (params: AuthParams) => auth.login(params).then(res => {
        setUser(res.data.user)
        auth.handleUserResponse(res.data.user)
    })
    const resister = (params: AuthParams) => auth.register(params).then(res => {
        setUser(res.data.user)
        auth.handleUserResponse(res.data.user)
    })
    const logout = () => auth.logout().then(()=>setUser(null))

    useEffect(()=> {
        const token = auth.getToken()
        if (token) {
            auth.me().then(res => {
                setUser(res.data.user)
            })
        }
    },[])
    return (
        <Auth.Provider value={{login,resister,logout,user}}>
            {children}
        </Auth.Provider>
    )
}

export const AuthContext = ():Auth_Context  => {
    const userContext = useContext(Auth)
    return userContext!
}
