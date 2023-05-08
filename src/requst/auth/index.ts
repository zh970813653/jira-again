import { AuthParams, User } from "types/auth"
import http from "..//http"
import { AxiosPromise } from "axios"

const localStorageKey = "__auth_provider_token__";
// const API = process.env.REACT_APP_API_URL
export const getToken = () => window.localStorage.getItem(localStorageKey);

export const handleUserResponse = (user : User ) => {
    window.localStorage.setItem(localStorageKey, user.token || "");
    return user;
  };

export const login = (data: AuthParams): AxiosPromise<{user:User}> => {
    return http({
        url: `/login`,
        method:'POST',
        data
    })
}

export const register = (data: AuthParams): AxiosPromise<{user:User}> => {
    return http({
        url: '/register',
        method:'post',
        data
    })
}

export const me = (): AxiosPromise<{user:User}> => {
    return http({
        url: '/me',
    })
}


export const logout = ():Promise<null> => {
    window.localStorage.removeItem(localStorageKey);
    return Promise.resolve(null)
}