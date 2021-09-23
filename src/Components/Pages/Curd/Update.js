import axios from '../../axios';
import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { Form ,Button} from 'react-bootstrap';
import { useState } from 'react';

function Update(props) {
  const [data, setData] = useState('')
  const [details, setDetails] = useState('')
  const [auth, setAuth] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const [locations, setLocations] = useState([])
  const [location_id, setLocation_id] = useState('')
  const [dob, setDob] = useState('')
  const [doj, setDoj] = useState('')
  const [password, setPassword] = useState('')
  const [age, setAge] = useState('')
  const [designation, setDesignation] = useState('')
  const [serverError, setServerError] = useState(false)
  const [error, setError] = useState('')
  const id = useParams()
  const history = useHistory()
  useEffect(() => {
    if (localStorage.getItem("token")) {
     getItem();
    }
  }, [])

  function getItem(){
    if(props.curd==="client"){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewClient/${props.id}`,config).then((response)=>{
        console.log(response.data.client)
      })
    }
    if(props.curd==="employee"){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewEmployee/${props.id}`,config).then((response)=>{
        setData(response.data.user)
        setDetails(response.data.user_details)
        console.log(response.data.user)
      })
    }
    if(props.curd==="driver"){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewDriver/${props.id}`,config).then((response)=>{
        setData(response.data.user)
        setDetails(response.data.user_details)
        console.log(response.data.user)
      })
    }
  }
  const update=(e)=>{
    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    if(props.curd==="employee"){
      const data = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        dob: dob,
        doj: doj,
        designation: designation,
        age: age,
        password: password,
       
      }
      console.log(data)
      axios.put(`/dashboard/editEmployee/${props.id}`,data,config).then((response)=>{
        console.log(response.data)
        history.push({
          pathname:'/dashboard/viewEmployees',
          state:"success"
        })
      }).catch(err => {
        setError(err.response.data.validation_error)
        console.log(err.response.data)
      }
      )
    }
    if(props.curd==="driver"){
      const data = {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        dob: dob,
        doj: doj,
        age: age,
        password: password,
       
      }
      console.log(data)
      axios.put(`/dashboard/editDriver/${props.id}`,data,config).then((response)=>{
        console.log(response.data)
        history.push({
          pathname:'/dashboard/viewDrivers',
          state:"success"
        })
      }).catch(err => {
        setError(err.response.data.validation_error)
        console.log(err.response.data)
      }
      )
    }
  }
  return (
    <div>
    
      <Form onSubmit={update} autoComplete={false} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <input type="hidden" name="email" id="" />
          <label>Name</label>
          <input type="text" required defaultValue={data.name} onChange={(e) => { setName(e.target.value) }} name="name" className="form-control" placeholder="Full Name" id="" />
          {error.name && <p className="error1"> {error.name}</p> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Email</label>
          <input type="email"  required defaultValue={data.email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email Address" id="" />
          {error.email && <p className="error1"> {error.email}</p> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Mobile</label>
          <input type="number" name="mobile" required defaultValue={details.mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" placeholder="Mobile Number" id="" />
          {error.mobile && <p className="error1"> {error.mobile}</p> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <label>Address</label>
          <input type="text" autoComplete="off"  required defaultValue={details.address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Address" id="" />
        </Form.Group>
        <input type="hidden" name="password" id="" />
        <Form.Group className="mb-3">
          <label>Password</label>
          <input type="password" name="my-field-name"  autoComplete="new-password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="password" id="" />
          {error.password && <p className="error1"> {error.password}</p> }
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Date of Join</label>
          <input type="date" name="doj" required defaultValue={details.doj} onChange={(e) => { setDoj(e.target.value) }} className="form-control" placeholder="" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Date of Birth</label>
          <input type="date" name="dob" required defaultValue={details.dob} onChange={(e) => { setDob(e.target.value) }} className="form-control" placeholder="" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Age</label>
          <input type="number" name="age" required defaultValue={details.age} onChange={(e) => { setAge(e.target.value) }} className="form-control" placeholder="Age" id="" />
        </Form.Group>
{props.curd==="employee" && <Form.Group className="mb-3" aria-label="Default select example">
      <select name="designation" defaultValue={details.designation} onChange={(e)=>{setDesignation(e.target.value)}} className="form-control" id="">
  <option defaultValue={details.designation}>{details.designation}</option>
    <option value="Doctor">Doctor</option>
    <option value="Nurse">Nurse</option>
      </select>
</Form.Group> }
        <div className="text-center pt-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form> 
    </div>
  )
}

export default Update
