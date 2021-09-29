import React, { useEffect, useState } from 'react'
import View from '../Appointment/View'

import { useHistory } from 'react-router'
import axios from '../../axios';

function ViewTask() {
    const [auth, setAuth] = useState('')
    const history = useHistory();
      useEffect(() => {
        if(!localStorage.getItem("token")){
          history.push('/login')
        }else{
          const token = JSON.parse(localStorage.getItem("token"))
          const config = {
            headers: { Authorization: `Bearer ${token.token} `}
        };
          axios.get("/dashboard", config ).then((response)=>{
            setAuth(response.data)
            console.log(response.data)
            })
        }
        
      }, [])
    return (
        <div>
            
         { auth.role=="2" &&  <View curd="employeeViewTask"/> }
         { auth.role=="3" &&  <View curd="driverViewTask"/> }
        </div>
    )
}

export default ViewTask
