import { message } from 'antd';
import { rejects } from 'assert';
import axios from 'axios'

const http = axios.create({
    timeout: 30000,
    method: 'get',
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        "Content-Type": 'application/json'
    }
})

http.interceptors.request.use(request => {
    // console.log(request);
    return request
})

http.interceptors.response.use(response => {
    // console.log(response,'response');
    
    // debugger
    // // if (response.data.status === 400) {
    // //     return response.data
    // // }
    // if (response.data.status !== 200) {
    //     debugger
    //     message.error(response.data.error)
    //     return response.data
    // }
    return response
},rejects => {
    // console.dir(rejects);
    message.error(rejects.response.data.message)
    return rejects
    
})
export default http