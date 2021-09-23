import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import Header from '../Dashboard/Header/Header'

function ProtectedRoutes(props) {
    let Route = props.routes
    
    useEffect(() => {
     if(!localStorage.getItem("token")){
         history.push("/login")
     }
    }, [])
    const history = useHistory()
    return (
        <div>
            <Header/>
            <Route/>
        </div>
    )
}

export default ProtectedRoutes
