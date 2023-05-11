import React, {ReactNode, createContext, useContext, useEffect, useState} from 'react'
import { AuthParams, User } from 'types/auth'
import * as auth from '../requst/auth'
import { useRequest } from 'ahooks'
import styled from '@emotion/styled'
import { Spin } from 'antd'
interface Auth_Context {
    login: (params: AuthParams) => void
    resister: (params: AuthParams) => void
    logout: () => void,
    user: User | null
}

const Auth = createContext<Auth_Context | null>(null)

const initialLoaginData = (setUser: (user: User) => void ) => {
    const token = auth.getToken()
    if (token) {
        return auth.me().then(res => {
            setUser(res.data.user)
        })
    }
    return Promise.reject(false)
}

export const AuthProvider = ({children}:{children:ReactNode}) => {
    const [user,setUser] = useState<User|null>(null)
    let initLoading = false
    const login = (params: AuthParams) => auth.login(params).then(res => {
        setUser(res.data.user)
        auth.handleUserResponse(res.data.user)
    })
    const resister = (params: AuthParams) => auth.register(params).then(res => {
        setUser(res.data.user)
        auth.handleUserResponse(res.data.user)
    })
    const logout = () => auth.logout().then(()=>setUser(null))

    const {run,loading} = useRequest(()=>initialLoaginData(setUser),{manual:true})
    useEffect(()=> {
        run()
    },[run])

    if (loading) {
        return (
            <FullPage>
               <Spin></Spin>
            </FullPage>
        )
    }
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

const FullPage = styled.div`
    width: 100vw;
    height: 100vh;
    display: inline-flex;
    align-items: center;
    justify-content: center
`