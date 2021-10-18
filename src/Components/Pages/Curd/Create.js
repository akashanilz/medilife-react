import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Dashboard/Header/Header';
import { useHistory } from 'react-router';
import axios from '../../axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../App.css'
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
function Create(props) {

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
  const history = useHistory();
  const override = css`
  display: block;
  margin: 2 auto;
  size:30;`;
  let [loading, setLoading] = useState(true);
  let [loader, setLoader] = useState(false);
  let [color, setColor] = useState("blue");
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push('/login')
    } else {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/allLocations", config).then((response) => {
        setLocations(response.data)
        //console.log(response.data)
      }).catch(err => {
        //console.log(err)
      })

      axios.get("dashboard/count", config).then((response) => {
        setAuth(response.data)
        //console.log(response.data)
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

        //console.log(response.data)
        history.push({
          pathname: '/dashboard/viewClients',
          state: "success"
        })
      }).catch(err => {
        //console.log(err.code)
      })
    }

  }

  const createEmployee = (e) => {
    setLoader(true)
    e.preventDefault();
    setError(false)
    setServerError(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
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
    //console.log(data)
    axios.post('/dashboard/createEmployee', data, config).then((response) => {
      //console.log(response.data)
      history.push({
        pathname: '/dashboard/viewEmployees',
        state: "success"
      })
    }).catch(err => {
      setLoader(false)
      setError(err.response.data.validation_error)
      //console.log(err.response.status)
      if (err.response.status === 500) {
        setServerError(true)
      }
      if (err.response.status === 401) {

      }
    })

  }
  const createDriver = (e) => {
    setLoader(true)
    e.preventDefault();
    setError(false)
    setServerError(false)
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    const data = {
      name: name,
      email: email,
      mobile: mobile,
      address: address,
      dob: dob,
      doj: doj,
      age: age,
      password: password

    }
    //console.log(data)
    axios.post('/dashboard/createDriver', data, config).then((response) => {

      history.push({
        pathname: '/dashboard/viewDrivers',
        state: "success"
      })
    }).catch(err => {
      setLoader(false)
      setError(err.response.data.validation_error)
      //console.log(err.response.data.validation_error)
      if (err.response.status === 500) {
        setServerError(true)
      }
      if (err.response.status === 401) {
        //setError(true)
      }
    })

  }
  return (
    <div>
      {/* <Header /> */}

      {auth && props.curd === "client" && <h1 className=" head11 text-center  italic  pt-4">Add client</h1>}
      {auth && props.curd === "employee" && <h1 className=" head11 text-center pt-4">Add Nurse</h1>}
      {auth && props.curd === "driver" && <h1 className=" head11 text-center pt-4">Add Transporter</h1>}
      {auth && props.curd === "appointment" && <h1 className=" head11 text-center pt-4">Create Appointment</h1>}
      {serverError && <p className="serverError">Server Error</p>}
      {props.curd === "client" && <div>
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
      </div>}

      {props.curd === "employee" && <div>
        {auth ? <Form onSubmit={createEmployee} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Name</label>
            <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} name="name" className="form-control" placeholder="Full Name" id="" />
            {error.name && <p className="error1"> {error.name}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Email</label>
            <input type="text" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email Address" id="" />
            {error.email && <p className="error1"> {error.email}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Mobile</label>
            <input type="number" name="mobile" required value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" placeholder="Mobile Number" id="" />
            {error.mobile && <p className="error1"> {error.mobile}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Address</label>
            <input type="text" name="address" required value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Address" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Password</label>
            <input type="password" name="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="password" id="" />
            {error.password && <p className="error1"> {error.password}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Date of Join</label>
            <input type="date" name="doj" required value={doj} onChange={(e) => { setDoj(e.target.value) }} className="form-control" placeholder="" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Date of Birth</label>
            <input type="date" name="dob" required value={dob} onChange={(e) => { setDob(e.target.value) }} className="form-control" placeholder="" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Age</label>
            <input type="number" name="age" required value={age} onChange={(e) => { setAge(e.target.value) }} className="form-control" placeholder="Age" id="" />
          </Form.Group>
          {/* <Form.Group className="mb-3" aria-label="Default select example">
      <select name="location" value={location_id} onChange={(e)=>{setLocation_id(e.target.value)}} className="form-control" id="">
  <option>Select</option>
  {
    locations.map((item,key) =>
    <option value={item.id}>{item.name}</option>
    )
  }
      </select>
</Form.Group> */}
          <Form.Group className="mb-3" aria-label="Default select example">
            <label htmlFor="">Employee Type</label>
            <select name="designation" value={designation} onChange={(e) => { setDesignation(e.target.value) }} className="form-control" id="">
              <option value="">Select</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
            </select>
          </Form.Group>
          <div className="text-center pt-2">
            {
              loader ? <Button variant="secondary" disabled={true} >
                Submit
              </Button> :
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            }
          </div>
          <div className="flex justify-center">
            {loader && <BeatLoader color={color} loading={loading} css={override} size={20} />}
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

      </div>}

      {props.curd === "driver" && <div>
        {auth ? <Form onSubmit={createDriver} className="col-sm-6 offset-sm-3 py-8 pl-7 pr-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Name</label>
            <input type="text" required value={name} onChange={(e) => { setName(e.target.value) }} name="name" className="form-control" placeholder="Full Name" id="" />
            {error.name && <p className="error1"> {error.name}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Email</label>
            <input type="text" name="email" required value={email} onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Email Address" id="" />
            {error.email && <p className="error1"> {error.email}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Mobile</label>
            <input type="number" name="mobile" required value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" placeholder="Mobile Number" id="" />
            {error.mobile && <p className="error1"> {error.mobile}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Address</label>
            <input type="text" name="address" required value={address} onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Address" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Password</label>
            <input type="password" name="password" required value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control" placeholder="password" id="" />
            {error.password && <p className="error1"> {error.password}</p>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Date of Join</label>
            <input type="date" name="doj" required value={doj} onChange={(e) => { setDoj(e.target.value) }} className="form-control" placeholder="" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Date of Birth</label>
            <input type="date" name="dob" required value={dob} onChange={(e) => { setDob(e.target.value) }} className="form-control" placeholder="" id="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <label>Age</label>
            <input type="number" name="age" required value={age} onChange={(e) => { setAge(e.target.value) }} className="form-control" placeholder="Age" id="" />
          </Form.Group>
          {/* <Form.Group className="mb-3" aria-label="Default select example">
      <select name="location" value={location_id} onChange={(e)=>{setLocation_id(e.target.value)}} className="form-control" id="">
  <option>Select</option>
  {
    locations.map((item,key) =>
    <option value={item.id}>{item.name}</option>
    )
  }
      </select>
</Form.Group> */}

          <div className="text-center pt-2">
            {
              loader ? <Button variant="secondary" disabled={true} >
                Submit
              </Button> :
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            }
          </div>
          <div className="flex justify-center">
            {loader && <BeatLoader color={color} loading={loading} css={override} size={20} />}
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

      </div>}
    </div>
  )
}

export default Create
