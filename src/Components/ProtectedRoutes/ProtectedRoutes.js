import React, { useEffect } from 'react'
import { useHistory } from 'react-router'

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
            <Route/>
        </div>
    )
}

export default ProtectedRoutes
