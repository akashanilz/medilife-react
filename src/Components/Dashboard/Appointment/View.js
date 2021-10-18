import axios from '../../axios'
import React, { useEffect, useState ,Fragment } from 'react'
import { Table,Form,Row, Modal,Button } from 'react-bootstrap'
import Header from '../Header/Header'
import './Appointment.css'
import { confirmAlert } from 'react-confirm-alert'
import { toast, ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { useHistory, useLocation } from 'react-router'
function View(props) {
  const [id, setId] = useState('')
  const [employee, setEmployee] = useState([])
  const [employeeId, setEmployeeId] = useState('')
  const [driver, setDriver] = useState([])
  const [time, setTime] = useState([])
  const [timeId, setTimeId] = useState('')
  const [driverId, setDriverId] = useState('')
  const location = useLocation()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) =>  setShow(true);
  function assign(e){
    setId(e)
    setShow(true)
  }
  const notify = () => toast('👍 Success !', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const deleteNotify = () => toast('😭 Deleted Successfully !', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  useEffect(() => {

    if (localStorage.getItem("token")) {
      if (location.state == "success") {
        notify()
        history.replace()
      }
      getData()
    }

  }, [])
  function clearAppointment(){
    const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      confirmAlert({
        title: 'Clear Appointments',
        message: 'All appointments will be cleared from this section .Make sure you have assigned the appointment and mail send.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
              axios.get('/dashboard/clearConfirmedAppointments', config).then((response) => {
                notify()
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
  const history = useHistory()
  const [appointment, setAppointment] = useState([])
  function getData() {
    if (props.curd === "completed") {
      // alert("employee")
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/appointmentsCompleted", config).then((response) => {
        //console.log(response.data)
        setAppointment(response.data)
        //console.log(response.data)
      })
    }
    if (props.curd === "employeeViewTask") {
      // alert("employee")
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/getMyTasks", config).then((response) => {
        //console.log(response.data)
        setAppointment(response.data)

        //console.log(response.data)
      })
    }
    if (props.curd === "employeeViewCompletedTask") {
      // alert("employee")
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/getMyCompletedTasks", config).then((response) => {
        //console.log(response.data)
        setAppointment(response.data)

        //console.log(response.data)
      })
    }
    if (props.curd === "driverViewTask") {
      // alert("employee")
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/getMyTasks", config).then((response) => {
        //console.log(response.data)
        setAppointment(response.data)
        //console.log(response.data)
      })
    }
    if (props.curd === "notconfirmed") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get('dashboard/appointmentsNotConfirmed', config).then((response) => {
        console.log(response.data)
        setAppointment(response.data);
      })
      axios.get('dashboard/timeRange', config).then((response) => {
        //console.log(response.data)
        setTime(response.data);
      })
      axios.get('dashboard/allEmployees', config).then((response) => {
        console.log(response.data)
        setEmployee(response.data);
        //console.log(employee)
      })
      axios.get('dashboard/allDrivers', config).then((response) => {
        console.log(response.data)
        setDriver(response.data);
       // console.log(driver)
      })
    }
    if (props.curd === "scheduled") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get('dashboard/appointmentsConfirmed', config).then((response) => {
        //console.log(response.data)
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
  function deleteAppointment (e){
    if (props.curd === "notconfirmed") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do delete.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
            axios.delete(`/dashboard/deleteAppointment/${e}`, config).then((response) => {
              deleteNotify()
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
  function confirmAppointment(e) {
    if (props.curd === "notconfirmed") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };

      confirmAlert({
        title: 'Send Mail Confirm',
        message: 'Edit option will not be available after sending mail.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
              axios.get(`/dashboard/confirmAppointment/${e}`, config).then((response) => {
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
  const schedule = (e)=>{
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"))
    const data={
      driver : driverId,
      employee : employeeId,
      time : timeId
    }
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    axios.post(`dashboard/scheduleAppointment/${id}`, data, config).then((response) => {
      //console.log(response.data)
     confirmNotify()
     getData()
     setEmployeeId('')
     setDriverId('')
     setTimeId('')
     handleClose(false)
    })

  }
  return (
    <div>
      {/* <Header/> */}
      {appointment.length == 0 && <p className="empty">Empty</p>}
      <div className="col-3 mt-3 ml-auto">
      { props.curd == "notconfirmed" &&    <button onClick={()=>{
        history.push('/dashboard/createAppointment')
      }} className="btn btn-primary">Schedule Appointment</button> }
      </div>
      {appointment.length !== 0 ? <div>

        {props.curd != "employeeViewTask" && props.curd != "driverViewTask" && props.curd != "completed" && props.curd !== "employeeViewCompletedTask" && <p className="head11">Appointment List</p>}
        {props.curd === "employeeViewTask" && <p className="head11">Task Assigned</p>}
        {props.curd === "employeeViewCompletedTask" && <p className="head11">Task Completed</p>}
        {props.curd === "driverViewTask" && <p className="head11">Task Assigned</p>}
        {props.curd === "completed" && <p className="head11">Appointments Completed</p>}

        <div className="responsive pl-3 pr-3">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Time</th>
                {/**Employee */}
                {props.curd === "notconfirmed" && <th>Nurse</th>}
                {props.curd === "scheduled" && <th>Nurse</th>}
                {props.curd === "driverViewTask" && <th>Nurse</th>}
                {props.curd === "completed" && <th>Nurse</th>}
                {/**Driver */}
                {props.curd === "notconfirmed" && <th>Transporter</th>}
                {props.curd === "scheduled" && <th>Transporter</th>}
                {props.curd === "employeeViewCompletedTask" && <th>Transporter</th>}
                {props.curd === "employeeViewTask" && <th>Transporter</th>}
                {props.curd === "completed" && <th>Transporter</th>}
                {/**Location */}
                {props.curd === "notconfirmed" && <th>Location</th>}
                {props.curd === "scheduled" && <th>Location</th>}
                {props.curd === "completed" && <th>Location</th>}
                {/**Status */}
                {props.curd === "scheduled" && <th>Status</th>}
                {props.curd === "driverViewTask" && <th>Status</th>}
                {props.curd === "employeeViewTask" && <th>Status</th>}

                {/**confirm */}
                {props.curd === "notconfirmed" && <th>Assign</th>}
                   {/**add client */}
                   {props.curd === "notconfirmed" && <th>Add client</th>}
                {/**edit */}
                {props.curd === "notconfirmed" && <th>Edit</th>}
                {/**mail */}
                {props.curd === "notconfirmed" && <th>Mail</th>}
                {props.curd === "notconfirmed" && <th>Delete</th>}
                {/**view */}
                {/* {props.curd==="scheduled" &&<th>View</th>} */}
                {props.curd === "employeeViewTask" && <th>View</th>}
                {props.curd === "completed" && <th>View</th>}
                {/* {props.curd==="driverViewTask" &&<th>View</th>} */}
              </tr>
            </thead>
            <tbody>
              {
                appointment.map((e, key) =>
                  <tr>
                    <td>{key + 1}</td>
                    <td>{e.date}</td>
                    {props.curd == "notconfirmed" && <td>
                    {e.time ? <p>{e.time.time}</p>: <p>Not Assigned</p>}
                      </td>}
                   {props.curd!=="notconfirmed" && <td>{e.time.time}</td> }
                    {/**Show Employee */}
                    {props.curd == "driverViewTask" && <td>{e.employee.name}</td>}
                    {props.curd == "notconfirmed" && <td>
                      {e.employee ? <p>{e.employee.name}</p>: <p>Not Assigned</p>}
                      </td>}

                    {props.curd == "scheduled" && <td>{e.employee.name}</td>}
                    {props.curd == "completed" && <td>{e.employee.name}</td>}
                    {/**Show driver */}
                    {props.curd == "employeeViewTask" && <td>{e.driver.name}</td>}
                    {props.curd == "employeeViewCompletedTask" && <td>{e.driver.name}</td>}
                    {props.curd == "notconfirmed" && <td>
                      {e.driver ? <p>{e.driver.name}</p>: <p>Not Assigned</p>}
                      </td>}
                    {/* {props.curd == "notconfirmed" && <td>
                    <Form.Select required value={driverId} onChange={(e) => {
                      setDriverId(e.target.value)
                                    }} >
                                        <option value="">Select</option>
                                        {
                                            employee.map((e) =>
                                                <option value={e.id}>{e.name}</option>
                                            )
                                        }

                                    </Form.Select>
                      </td>} */}
                    {props.curd == "scheduled" && <td>{e.driver.name}</td>}
                    {props.curd == "completed" && <td>{e.driver.name}</td>}
                    {/**Location */}

                    {props.curd == "notconfirmed" && <td>{e.location}</td>}
                    {props.curd == "scheduled" && <td>{e.location}</td>}
                    {props.curd == "completed" && <td>{e.location}</td>}
                    {/**Status */}


                    {props.curd == "employeeViewTask" && e.status == "0" && <td className="status1"> pending </td>}
                    {props.curd == "employeeViewTask" && e.status == "1" && <td className="status2" > On the way </td>}
                    {props.curd == "employeeViewTask" && e.status == "2" && <td className="status3"> Samples collected </td>}

                    {props.curd == "driverViewTask" && e.status == "0" && <td className="status1"> pending </td>}
                    {props.curd == "driverViewTask" && e.status == "1" && <td className="status2" > On the way </td>}
                    {props.curd == "driverViewTask" && e.status == "2" && <td className="status3"> Samples collected </td>}

                    {props.curd == "scheduled" && e.status == "0" && <td className="status1"> pending </td>}
                    {props.curd == "scheduled" && e.status == "1" && <td className="status2"> On the way </td>}
                    {props.curd == "scheduled" && e.status == "2" && <td className="status3"> Samples collected </td>}

{/**Assign */}
 {props.curd == "notconfirmed" && <td> {props.curd == "notconfirmed" && e.assign==0 && <button onClick={()=>{
  assign(e.id)
 }} className="btn btn-danger">Assign</button>} {props.curd == "notconfirmed" && e.assign==1 && <p>Assigned </p> } </td>}

{/**Add client */}
{props.curd == "notconfirmed" && <td> {props.curd == "notconfirmed" && e.clients_count==0 && <button onClick={()=>{
 history.push({
   pathname:"/dashboard/confirmAppointmentsClients",
   state:e.id
 })
 }} className="btn btn-warning">Add Client</button>} {props.curd == "notconfirmed" && e.clients_count!==0 && <p>Client added </p> } </td>}


{/**Edit Confirm */}
 {props.curd == "notconfirmed" &&<td> {props.curd === "notconfirmed" && e.assign==1 && e.mail==0 && <svg onClick={()=>{
  assign(e.id)
 }} xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg> } {props.curd === "notconfirmed" && e.assign==0 && <p>Only after assign</p> } {props.curd === "notconfirmed" && e.assign==1 && e.mail==1 && <p>Mail send cannot edit</p> } </td> }

{/**Mail */}
{props.curd == "notconfirmed" && <td>{props.curd === "notconfirmed" && e.mail == 0 && e.assign==1 &&
<button  onClick={() => confirmAppointment(e.id)} className="btn btn-warning">Send Mail</button>} {props.curd === "notconfirmed" && e.mail == 1 &&
 <p>Mail Send</p> } {props.curd === "notconfirmed" && e.mail == 0 && e.assign==0 &&
 <p>Only after assign</p> }  </td>}
                  
                    {/**Confirm */}
        
                  
                    {props.curd === "notconfirmed" && <td>
                    <svg xmlns="http://www.w3.org/2000/svg"  onClick={() => deleteAppointment(e.id)} width="30" height="30" fill="#f70707" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg>
                    </td>}
                    {/**Confirmed */}
                    {/* {props.curd==="scheduled" &&  <td><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>} */}
                    {props.curd === "employeeViewTask" && <td><svg onClick={() => { history.push(`/dashboard/viewTaskDetails/${e.id}`) }} xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg></td>}
                    {props.curd === "completed" && <td><svg onClick={() => { history.push(`/dashboard/viewAppointment/${e.id}`) }} xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg></td>}
                    {/* {props.curd==="driverViewTask" &&  <td><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>} */}
                  </tr>
                )
              }


            </tbody>
          </Table>
        </div>
           {appointment.length !==0 && props.curd == "notconfirmed" &&  <div className="col-sm-6 pl-12">    <button onClick={clearAppointment} className="btn btn-primary"> Final Submit</button> </div>}
         </div> :

        <div>
          <div class="border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
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
            
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
       
          <Modal.Title>Schedule Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form action="" onSubmit={schedule}>
            <div className="pt-2">
            <label htmlFor="">Time</label>
            <Form.Select required value={timeId} onChange={(e) => {
                      setTimeId(e.target.value)
                                    }} >
                                        <option value="">Select</option>
                                        {
                                            time.map((e) =>
                                                <option value={e.id}>{e.time}</option>
                                            )
                                        }

                                    </Form.Select>
            </div>
                                <div className="pt-3">
                                <label htmlFor="">Employee</label>
            <Form.Select required value={employeeId} onChange={(e) => {
                      setEmployeeId(e.target.value)
                                    }} >
                                        <option value="">Select</option>
                                        {
                                            employee.map((e) =>
                                                <option value={e.id}>{e.name}</option>
                                            )
                                        }

                                    </Form.Select>
                                </div>
                                
                                <div className="pt-3">
                                <label htmlFor="">Driver</label>
            <Form.Select required value={driverId} onChange={(e) => {
                      setDriverId(e.target.value)
                                    }} >
                                        <option value="">Select</option>
                                        {
                                            driver.map((e) =>
                                                <option value={e.id}>{e.name}</option>
                                            )
                                        }

                                    </Form.Select>
                                </div>
                                <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <button className="btn btn-primary" type="submit">
           Submit
          </button>
        </Modal.Footer>
                                </form>
        </Modal.Body>
    
      
      </Modal>
  
      <ToastContainer />
    </div>
  )
}

export default View
