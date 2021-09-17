import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Dashboard/Header/Header';
import { useHistory } from 'react-router';
import axios from '../../axios';
function Create(props) {
  const [auth, setAuth] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push('/login')
    } else {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/count", config).then((response) => {
        setAuth(response.data)
        console.log(response.data)
      }).catch(err => {
        if (err.response.status === 401) {
          history.push('/login')
        }
      })


    }

  }, [])
  const createClient = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      address: address
    }
    if (props.curd == "client") {
      axios.post('dashboard/createClient', data, config).then((response) => {
        console.log(response.data)
        history.push('/dashboard')
      }).catch(err => {
        console.log(err.code)
      })
    }

  }
  const createEmployee = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      address: address
    }
    if (props.curd == "client") {
      axios.post('dashboard/createEmployee', data, config).then((response) => {
        console.log(response.data)
        history.push('/dashboard')
      }).catch(err => {
        console.log(err.code)
      })
    }

  }
  return (
    <div>
      <Header />

      {auth && props.curd==="client" && <h1 className="text-center italic  pt-4">Add client</h1>}
      {auth && props.curd==="employee" && <h1 className="text-center pt-4">Add Employee</h1>}
      {auth && props.curd==="appointment" && <h1 className="text-center pt-4">Create Appointment</h1>}
     { props.curd==="client" && <div>
     {auth ? <Form onSubmit={createClient} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Name</label>
          <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} name="name" className="form-control" placeholder="Full Name" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Email</label>
          <input type="text" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email Address" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Mobile</label>
          <input type="number" name="mobile" required value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" placeholder="Mobile Number" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Address</label>
          <input type="text" name="address" required value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Address/Location" id="" />
        </Form.Group>
        <div className="text-center pt-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form> :
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
      </div> }

      { props.curd==="employee" && <div>
     {auth ? <Form onSubmit={createEmployee} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Name</label>
          <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} name="name" className="form-control" placeholder="Full Name" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Email</label>
          <input type="text" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email Address" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Mobile</label>
          <input type="number" name="mobile" required value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" placeholder="Mobile Number" id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Address</label>
          <input type="text" name="address" required value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Address/Location" id="" />
        </Form.Group>
        <div className="text-center pt-2">
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form> :
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
      
      </div> }
      { props.curd==="appointment" && <div>
     {auth ? <Form  className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Remark</label>
          <input type="text" required  onChange={(e) => { setName(e.target.value) }}  className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Nurse</label>
          <input type="text" name="" required  onChange={(e) => { setEmail(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Driver</label>
          <input type="text" name="" required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Time</label>
          <input type="time" name="" required  onChange={(e) => { setAddress(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Location</label>
          <input type="text" name="" required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Whatsapp No</label>
          <input type="number"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Contact no</label>
          <input type="number" required value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Name</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Building Name</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Room no</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" aria-label="Default select example">
        <label>TAT</label>
      <select name="" className="form-control" id="">
     
  <option>Select</option>
  <option value="1">3</option>
  <option value="2">6</option>
  <option value="3">12</option>
      </select>
</Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>No of test</label>
          <input type="number"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Cost/Test</label>
          <input type="number" required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Net Amount</label>
          <input type="number"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Card/Cash</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Sales office</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <label>Detail Sent Team</label>
          <input type="text"  required  onChange={(e) => { setMobile(e.target.value) }} className="form-control"  id="" />
        </Form.Group>
        <div className="text-center pt-2">
          <Button variant="primary" disabled={true} type="submit">
            Submit
          </Button>
        </div>
      </Form> :
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
      
      </div> }

    </div>
  )
}

export default Create
