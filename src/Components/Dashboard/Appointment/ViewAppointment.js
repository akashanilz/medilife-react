import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Header from '../Header/Header'
import './Appointment.css'
function ViewAppointment() {
     useEffect(() => {
         
     }, [])
    useEffect(() => {
       
        if (localStorage.getItem("token")) {
            getData()
            }
         
        }, [])
   const [appointment, setAppointment] = useState([])
  
    function getData(){
        const token = JSON.parse(localStorage.getItem("token"))
        const config = {
          headers: { Authorization: `Bearer ${token.token} ` }
        };
        axios.get('dashboard/allAppointments',config).then((response)=>{
            console.log(response.data)
         setAppointment(response.data);
        })
    }
    return (
        <div>
            {/* <Header/> */}
      { appointment.length!==0 ?  <div>
      
      <p className="head11">Appointment List</p>
           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Time</th>
      <th>Employee</th>
      <th>Driver</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
  {
                appointment.map((e,key)=>
                <tr>
                <td>{key+1}</td>
                <td>{e.date}</td>
                <td>{e.time.time}</td>
                <td>{e.employee.name}</td>
                <td>{e.driver.name}</td>
                <td><button className="btn btn-success">Confirm</button></td>
              </tr>
                )
           }

   
  </tbody>
</Table> </div> : 

<div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

}
        </div>
    )
}

export default ViewAppointment
