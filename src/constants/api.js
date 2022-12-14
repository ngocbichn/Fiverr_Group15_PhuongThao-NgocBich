import axios from "axios";

const TokenCyberSoft = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'


const baseURL = 'https://fiverrnew.cybersoft.edu.vn/api/'

export const api = axios.create()

api.interceptors.request.use((config) => {
    const Token = JSON.parse(localStorage.getItem('User_Login'))?.token
    config = {
        ...config,
        headers: {
            TokenCyberSoft,
        },
        baseURL,
    }
    if (Token) {
        config.headers['Token'] = `${Token}`
    }

    return config
})
