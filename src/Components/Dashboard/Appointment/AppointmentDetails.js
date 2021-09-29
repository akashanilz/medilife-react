import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Table } from 'react-bootstrap';
import './Appointment.css';
import { useHistory, useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { confirmAlert } from 'react-confirm-alert';
function AppointmentDetails(props) {
  const history = useHistory();
    const [appointment, setAppointment] = useState([])
    const [driver, setDriver] = useState('')
    const [time, setTime] = useState('')
    const location = useLocation()
    const [employee, setEmployee] = useState('')
    const [category, setCategory] = useState('')
    const [clients, setClients] = useState([])
    const [group, setGroup] = useState([])
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
      if(location.state =="success"){
           notify()
           history.replace()
      }
      getData()
    }, [])
    function getData(){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} `}
    };
      axios.get(`/dashboard/findAppointment/${props.id}`, config ).then((response)=>{
       setAppointment(response.data.appointment)
       setTime(response.data.appointment.time.time)
     // console.log(JSON.stringify(response.data.appointment))
     setAppointment(response.data.appointment)
    
     setGroup(response.data.group)
        setDriver(response.data.driver)
       setEmployee(response.data.employee)
        })
    }
   function changeStatus(){
          
    if(window.confirm("Change status ")){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} `}
    };
      axios.get(`/dashboard/changeAppointmentStatus/${props.id}`, config ).then((response)=>{
         
                getData()
                notify()
        })
    }
    }
    function mail(){
          
      if(window.confirm("Change status ")){
        const token = JSON.parse(localStorage.getItem("token"))
        const config = {
          headers: { Authorization: `Bearer ${token.token} `}
      };
        axios.get(`/dashboard/mailonTheWay/${props.id}`, config ).then((response)=>{
           
                  getData()
                  notify()
          })
      }
      }
      function changeStatuss(){
          
        if(window.confirm("Change status ")){
          const token = JSON.parse(localStorage.getItem("token"))
          const config = {
            headers: { Authorization: `Bearer ${token.token} `}
        };
          axios.get(`/dashboard/changeAppointmentStatus/${props.id}`, config ).then((response)=>{
             
                  
                    history.push({
                      pathname : '/dashboard/viewMyTasks',
                      state : "success"
                    })
            })
        }
        }
    return (
        <div>
                 <h1 className="head11">Appointment Details</h1>
            
                 <Form >
                     <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
                     <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Time</label>
                     <Form.Control readOnly value={time} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Date</label>
                     <Form.Control readOnly value={appointment.date} />
                   </Col>
                 </Row>
                 <Row className="pt-3">
                   <Col>
                   <label className="label" htmlFor="">Location</label>
                     <Form.Control readOnly value={appointment.location} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Number of Test</label>
                     <Form.Control readOnly value={appointment.number_of_test} />
                   </Col>
                 </Row>
                 <Row className="pt-3">
                   <Col>
                   <label className="label" htmlFor="">Amount</label>
                     <Form.Control readOnly value={appointment.net_amount} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Remark</label>
                     <Form.Control readOnly value={appointment.remark} />
                   </Col>
                 </Row>
                 <br />
                 <h1 className="head11">Driver Details</h1>
                 <br />
                 <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Driver Name</label>
                     <Form.Control readOnly value={driver.name} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Driver Email</label>
                     <Form.Control readOnly value={driver.email} />
                   </Col>
                 </Row>
                 <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Driver Mobile</label>
                     <Form.Control readOnly value={driver.mobile} />
                   </Col>
                 
                 </Row>
                     </div>
                     <br />
             
                 <h1 className="head11">Client Details</h1>
       
                 
                 
               {appointment.disclosure =="1" && <p className="paydone">Payment Done</p>}
                <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
             
              
                   <div>
                  <Table striped bordered hover size="sm">
                   <thead>
                     <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>Email</th>
                       <th>Contact Number</th>
                       <th>Alhasna Number</th>
                       <th>Building Name</th>
                       <th>Room Number</th>
                     {appointment.disclosure =="0" &&  <th>Add Details</th> }
                     </tr>
                   </thead>
                   <tbody>
            
                   {
                   group.map((e,key)=>
                     <tr>
                       <td>{key+1}</td>
                       <td>{e.client.name}</td>
                       <td>{e.client.email}</td>
                       <td>{e.client.contact_number}</td>
                       <td>{e.client.alhasna_number}</td>
                       <td>{e.client.building_name}</td>
                       <td>{e.client.room_number}</td>
                  { appointment.disclosure =="0" &&
                    <div>
                          {e.client.status =="0" && <td><button type="button" onClick={()=>{history.push({
                        pathname:`/dashboard/viewTaskDetails/addClientCategory/${e.client.id}`,
                        state : props.id
                      })}} className="btn btn-danger">Add</button></td> } 
                      {e.client.status =="1" && <td><button type="button" onClick={()=>{history.push({
                        pathname : `/dashboard/viewTaskDetails/updateClientCategory/${e.client.id}`,
                        state : props.id
                      })}} className="btn btn-warning">Edit</button></td> }
                    </div>
                  }
                     </tr>
        
        )
      }
                   </tbody>
                 </Table>
                
                   
                         <p>{category}</p>
                 </div>
                   
                      <br />
                           <div className="col-md-36 text-center">
            <button onClick={()=>{history.push(`/dashboard/viewTaskDetails/createClient/${props.id}`)}} className=" btn btn-primary">Add Client</button>
            </div>
                </div>
               </Form>

                 
             
      <h1 className="head11">Update Status as</h1>
      <br />
    
                <div className="col-md-36 text-center"> {  appointment &&
                   <div>
                   
                      {appointment.status =="0" &&   <button onClick={mail} className=" btn btn-primary">On the way </button> }
                    {appointment.status =="1" &&   <button  onClick={changeStatus}  className=" btn btn-warning">Sample collected </button> }
                    {appointment.status =="2" &&   <button  onClick={changeStatuss}  className=" btn btn-success">Task completed </button> }
                   </div>
                }
                   
                </div> 
      
        <ToastContainer />
        </div>
    )
}

export default AppointmentDetails
