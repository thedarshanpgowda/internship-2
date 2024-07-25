import React, { useContext } from 'react'
import StudentProfileContext from '../context/Newcontext'
import FacultyProfileContext from '../context/FacultyContext'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

export default function Auth1() {
    const user = useContext(StudentProfileContext)
    const location = useLocation()
    console.log("entered")
    console.log(user.user)
    return (
        user?.user?.token ? <Outlet/> : <Navigate to= "/mnm/" state={{from : location}} replace />
    )
}

export function Auth2() {
    const faculty = useContext(FacultyProfileContext)
    const location = useLocation()
    
    return (
            faculty?.faculty?.token ? <Outlet/> : <Navigate to= "/mnm/faculty" state={{from : location}} replace />
    )
}
