import axios from "axios";

export const axiosPrivate =
    axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true,
        'content-type' : 'application/json'
    })

