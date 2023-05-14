import { message } from 'antd';
import { rejects } from 'assert';
import axios from 'axios'
import { getToken } from './auth';

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
    const token = getToken()
    if (token) {
        request.headers['Authorization'] = `Bearer ${token}`
    }
    return request
})

http.interceptors.response.use(response => {
    return response
},rejects => {
    // console.dir(rejects);
    message.error(rejects.response.data.message)
    return rejects
    
})
export default http