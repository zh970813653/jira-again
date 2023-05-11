import { TableListType, TableListParams, SelectUser } from "types/project"
import http from "..//http"
import { AxiosPromise } from "axios"



export const getTableList = (props: TableListParams): AxiosPromise<TableListType[]> => {
    let url = '/projects'
    if (props.name) {
        url+= url.includes('?')? `&name=${props.name}`: `?name=${props.name}`
    }
    if (props.personId) {
        url+= url.includes('?')? `&personId=${props.personId}`: `?personId=${props.personId}`
    }
    return http({
        url,
        method:'get',
    })
}

export const getSelectUser = (): AxiosPromise<SelectUser[]> => {
    return http({
        url: `/users`,
        method:'get',
    }) 
}