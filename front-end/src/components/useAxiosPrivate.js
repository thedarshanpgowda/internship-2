import {axiosPrivate} from "./axiosPrivate";
import { useContext, useEffect } from "react";
import StudentProfileContext from "../context/Newcontext";


export default function useAxiosPrivate() {
    const user = useContext(StudentProfileContext)
    useEffect(() => {
        const requestIntercept = axiosPrivate.interceptors.request.use(config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${user?.user?.token}`
            }
            return config

        }, (error) => Promise.reject(error))

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept)
        }
    }, [user.user])
    return axiosPrivate
}
