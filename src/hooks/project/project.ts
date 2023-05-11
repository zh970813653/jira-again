import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"


export const useUrlQueryParam = <T extends string>(params: T[]) => {
    const [searchParams,setSearchParams] = useSearchParams()
    const data = useMemo(()=>{
        return params.reduce((pre,key)=>{
            return {
                ...pre,
                [key]: searchParams.get(key) || ''
            }
        },{})
    },[params])
    // setSearchParams({
    //     project: '2'
    // })
    return [
        data as {[key in T]: string},
        (data: {[key in T]?: unknown} ) => {
            let obj = {} as any
            for(let key in data) {
                const value = data[key]
                if (value) {
                    obj[key] = value
                }
            }
            return setSearchParams(obj)
        }
    ] as const
}