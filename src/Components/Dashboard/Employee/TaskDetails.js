import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import axios from '../../axios';
import AppointmentDetails from '../Appointment/AppointmentDetails';

function TaskDetails() {
    const id= useParams()
  
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
              { auth.role=="2" &&  <AppointmentDetails id={id.id} curd="employeeViewTask"/> }
         { auth.role=="3" && history.push('dashboard') }
        </div>
    )
}

export default TaskDetails
