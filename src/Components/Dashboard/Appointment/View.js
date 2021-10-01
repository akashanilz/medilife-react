import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { Table} from 'react-bootstrap'
import Header from '../Header/Header'
import './Appointment.css'
import { confirmAlert } from 'react-confirm-alert'
import { toast, ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useHistory,useLocation } from 'react-router'
function View(props) {
  const location = useLocation()
  const notify = () => toast('👍 Success !', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
     useEffect(() => {
         
     }, [])
    useEffect(() => {
       
        if (localStorage.getItem("token")) {
          if(location.state =="success"){
            notify()
            history.replace()
       }
            getData()
            }
         
        }, [])
        const history = useHistory()
   const [appointment, setAppointment] = useState([])
  
    function getData(){
      if(props.curd==="completed"){
        // alert("employee")
         const token = JSON.parse(localStorage.getItem("token"))
         const config = {
           headers: { Authorization: `Bearer ${token.token} ` }
         };
         axios.get("dashboard/appointmentsCompleted", config).then((response) => {
           console.log(response.data)
           setAppointment(response.data)
           console.log(response.data)
         })
       }
      if(props.curd==="employeeViewTask"){
       // alert("employee")
        const token = JSON.parse(localStorage.getItem("token"))
        const config = {
          headers: { Authorization: `Bearer ${token.token} ` }
        };
        axios.get("dashboard/getMyTasks", config).then((response) => {
          console.log(response.data)
          setAppointment(response.data)
       
          console.log(response.data)
        })
      }
      if(props.curd==="employeeViewCompletedTask"){
        // alert("employee")
         const token = JSON.parse(localStorage.getItem("token"))
         const config = {
           headers: { Authorization: `Bearer ${token.token} ` }
         };
         axios.get("dashboard/getMyCompletedTasks", config).then((response) => {
           console.log(response.data)
           setAppointment(response.data)
        
           console.log(response.data)
         })
       }
      if(props.curd==="driverViewTask"){
        // alert("employee")
         const token = JSON.parse(localStorage.getItem("token"))
         const config = {
           headers: { Authorization: `Bearer ${token.token} ` }
         };
         axios.get("dashboard/getMyTasks", config).then((response) => {
           console.log(response.data)
           setAppointment(response.data)
        
           console.log(response.data)
         })
       }
        if(props.curd==="notconfirmed"){
            const token = JSON.parse(localStorage.getItem("token"))
            const config = {
              headers: { Authorization: `Bearer ${token.token} ` }
            };
            axios.get('dashboard/appointmentsNotConfirmed',config).then((response)=>{
                console.log(response.data)
             setAppointment(response.data);
            })
        }
        if(props.curd==="scheduled"){
            const token = JSON.parse(localStorage.getItem("token"))
            const config = {
              headers: { Authorization: `Bearer ${token.token} ` }
            };
            axios.get('dashboard/appointmentsConfirmed',config).then((response)=>{
                console.log(response.data)
             setAppointment(response.data);
            })
        }
     
    }
    const confirmNotify = () => toast('👍 Appointment Confirmed !', {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    function confirmAppointment(e){
        if(props.curd==="notconfirmed"){
            const token = JSON.parse(localStorage.getItem("token"))
            const config = {
              headers: { Authorization: `Bearer ${token.token} ` }
            };
         
            confirmAlert({
              title: 'Confirm Appointment',
              message: 'Shedule this appointment.',
              buttons: [
                {
                  label: 'Yes',
                  onClick: () => 
                  axios.get(`/dashboard/confirmAppointment/${e}`, config).then((response)=>{
                    confirmNotify()
                    getData()
                    
                 })
                },
                {
                  label: 'No',
                  onClick: () => getData()
                }
              ]
            });
           
        }
     
    
    }
    return (
        <div>
            {/* <Header/> */}
            {!appointment && <p className="empty">Empty</p>}
      { appointment.length!==0 ?  <div>
      
      {props.curd!="employeeViewTask" && props.curd!="driverViewTask"  && props.curd!="completed" && props.curd!=="employeeViewCompletedTask" && <p className="head11">Appointment List</p>}
      {props.curd==="employeeViewTask" && <p className="head11">Task Assigned</p>}
      {props.curd==="employeeViewCompletedTask" && <p className="head11">Task Completed</p>}
      {props.curd==="driverViewTask" && <p className="head11">Task Assigned</p>}
      {props.curd==="completed" && <p className="head11">Appointments Completed</p>}

           <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Date</th>
      <th>Time</th>
      {/**Employee */}
      {props.curd==="notconfirmed" &&<th>Employee</th>}
      {props.curd==="scheduled" &&<th>Employee</th>}
      {props.curd==="driverViewTask" &&<th>Employee</th>} 
      {props.curd==="completed" &&<th>Employee</th>} 
      {/**Driver */}
      {props.curd==="notconfirmed" &&<th>Driver</th>}
      {props.curd==="scheduled" &&<th>Driver</th>}
      {props.curd==="employeeViewCompletedTask" &&<th>Driver</th>}
      {props.curd==="employeeViewTask" &&<th>Driver</th>}
      {props.curd==="completed" &&<th>Driver</th>}
        {/**Location */}
        {props.curd==="notconfirmed" &&<th>Location</th>}
      {props.curd==="scheduled" &&<th>Location</th>}
      {props.curd==="completed" &&<th>Location</th>}
         {/**Status */}
         {props.curd==="scheduled" &&<th>Status</th>}
         {props.curd==="driverViewTask" &&<th>Status</th>}
      {props.curd==="employeeViewTask" &&<th>Status</th>}
     
       {/**confirm */}
      {props.curd==="notconfirmed" &&<th>Confirm</th>} 
       {/**view */}
       {/* {props.curd==="scheduled" &&<th>View</th>} */}
       {props.curd==="employeeViewTask" &&<th>View</th>}
       {props.curd==="completed" &&<th>View</th>}
       {/* {props.curd==="driverViewTask" &&<th>View</th>} */}
    </tr>
  </thead>
  <tbody>
  {
                appointment.map((e,key)=>
                <tr>
                <td>{key+1}</td>
                <td>{e.date}</td>
                <td>{e.time.time}</td>
                   {/**Show Employee */}
               { props.curd=="driverViewTask" && <td>{e.employee.name}</td> }
               { props.curd=="notconfirmed" && <td>{e.employee.name}</td> }
               { props.curd=="scheduled" && <td>{e.employee.name}</td> }
               { props.curd=="completed" && <td>{e.employee.name}</td> }
                 {/**Show driver */}
               { props.curd=="employeeViewTask" && <td>{e.driver.name}</td> }
               { props.curd=="employeeViewCompletedTask" && <td>{e.driver.name}</td> }
               { props.curd=="notconfirmed" && <td>{e.driver.name}</td> }
               { props.curd=="scheduled" && <td>{e.driver.name}</td> }
               { props.curd=="completed" && <td>{e.driver.name}</td> }
                  {/**Location */}
                
               { props.curd=="notconfirmed" && <td>{e.location}</td> }
               { props.curd=="scheduled" && <td>{e.location}</td> }
               { props.curd=="completed" && <td>{e.location}</td> }
                     {/**Status */}
                
                  
               { props.curd=="employeeViewTask" && e.status=="0"  &&<td className="status1"> pending </td> }
               { props.curd=="employeeViewTask" && e.status=="1"  &&<td  className="status2" > On the way </td> }
               { props.curd=="employeeViewTask" && e.status=="2"  &&<td  className="status3"> Samples collected </td> }
              
               { props.curd=="driverViewTask" && e.status=="0"  &&<td className="status1"> pending </td> }
               { props.curd=="driverViewTask" && e.status=="1"  &&<td  className="status2" > On the way </td> }
               { props.curd=="driverViewTask" && e.status=="2"  &&<td  className="status3"> Samples collected </td> }

               { props.curd=="scheduled" && e.status=="0"  &&<td  className="status1"> pending </td> }
               { props.curd=="scheduled" && e.status=="1"  &&<td  className="status2"> On the way </td> }
               { props.curd=="scheduled" && e.status=="2"  &&<td  className="status3"> Samples collected </td> }
            
                  {/**Confirm */}
                {props.curd==="notconfirmed" && <td>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={()=>confirmAppointment(e.id)}  width="30" height="30" fill="#08cf26" class="bi bi-check-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
</svg>
                </td>}
                    {/**Confirmed */}
                {/* {props.curd==="scheduled" &&  <td><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>} */}
{props.curd==="employeeViewTask" &&  <td><svg onClick={()=>{history.push(`/dashboard/viewTaskDetails/${e.id}`)}} xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>}
{props.curd==="completed" &&  <td><svg onClick={()=>{history.push(`/dashboard/viewAppointment/${e.id}`)}} xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>}
{/* {props.curd==="driverViewTask" &&  <td><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>} */}
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
<ToastContainer />
        </div>
    )
}

export default View
