import React, { useEffect, useState } from 'react'
import { Form,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Dashboard/Header/Header';
import { useHistory } from 'react-router';
import axios from '../../axios';
function Create() {
    const [auth, setAuth] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const history = useHistory();
      useEffect(() => {
        if(!localStorage.getItem("token")){
          history.push('/login')
        }else{
          const token = JSON.parse(localStorage.getItem("token"))
          const config = {
            headers: { Authorization: `Bearer ${token.token} `}
        };
          axios.get("dashboard/count", config).then((response)=>{
            setAuth(response.data)
            console.log(response.data)
            }).catch(err=>{
                  if(err.response.status ===401){
                      history.push('/login')
                  }
            })
           
           
        }
        
      }, [])
      const createForm = (e)=>{
          e.preventDefault();
          const token = JSON.parse(localStorage.getItem("token"))
          const config = {
            headers: { Authorization: `Bearer ${token.token} `}
        };
        const data = {
            name : name,
            email : email,
            mobile : mobile,
            address : address
        }
          axios.post('dashboard/createClient',data,config).then((response)=>{
              console.log(response.data)
              history.push('/dashboard')
          }).catch(err=>{
              console.log(err.code)
          })
      }
    return (
        <div>
            <Header />
            {auth && <h1 className="text-center pt-4">Add client</h1>}
        {auth && <Form onSubmit={createForm} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
         <Form.Group className="mb-3" controlId="formBasicEmail">
    <label>Name</label>
    <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} name="name" className="form-control" placeholder="Full Name" id="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <label>Email</label>
    <input type="text" name="email" required value={email} onChange={(e)=>{setEmail(e.target.value)}} className="form-control" placeholder="Email Address" id="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <label>Mobile</label>
    <input type="number" name="mobile" required value={mobile} onChange={(e)=>{setMobile(e.target.value)}} className="form-control" placeholder="Mobile Number" id="" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <label>Address</label>
    <input type="text" name="address" required value={address} onChange={(e)=>{setAddress(e.target.value)}} className="form-control" placeholder="Address/Location" id="" />
  </Form.Group>
 <div className="text-center pt-2">
 <Button  variant="primary" type="submit">
    Submit
  </Button>
 </div>
</Form>}
        </div>
    )
}

export default Create
