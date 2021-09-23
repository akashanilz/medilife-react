import React, { useEffect, useState,Fragment } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../Dashboard/Header/Header';
import './Appointment.css'
import { useHistory } from 'react-router';
import axios from '../../axios';
function CreateAppointment(props) {
    const [count, setCount] = useState(1)
    const handleInputChange = (index, event) => {
        const values = [...inputFields];
        if (event.target.name === "name") {
            values[index].name = event.target.value;
        }

        if (event.target.name === "whatsapp_number") {
            values[index].whatsapp_number = event.target.value;
        }
        if (event.target.name === "contact_number") {
            values[index].contact_number = event.target.value;
        }
        if (event.target.name === "building_name") {
            values[index].building_name = event.target.value;
        }
        if (event.target.name === "room_number") {
            values[index].room_number = event.target.value;
        }
        if (event.target.name === "tat") {
            values[index].tat = event.target.value;
        }
        if (event.target.name === "id_number") {
            values[index].id_number = event.target.value;
        }
        if (event.target.name === "id_type") {
            values[index].id_type = event.target.value;
        }
        if (event.target.name === "alhasna_number") {
            values[index].alhasna_number = event.target.value;
        }
        if (event.target.name === "email") {
            values[index].email = event.target.value;
        }

        setInputFields(values);
    };
    const [inputFields, setInputFields] = useState([
        { name: '', id_number: '', id_type: '', whatsapp_number: '', contact_number: '', building_name: '', room_number: '', tat: '', alhasna_number: '', email: '' }
    ]);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("inputFields", inputFields);
        const token = JSON.parse(localStorage.getItem("token"))
        const config = {
            headers: { Authorization: `Bearer ${token.token} ` }
        };
        const data = {
            remark: remark,
            number_of_test:inputFields.length,
            cost_per_test:costPerTest,
            net_amount : netAmount,
            payment_type : paymentType,
            driver:driver,
            location:location,
            employee:employee,
            time:time,
            date:date,
            clients: inputFields
          }
          axios.post('dashboard/createAppointment',data,config).then((response)=>{
                history.push({
                    pathname:"/dashboard",
                    state:"success"
                })
          })
         console.log(JSON.stringify(data, null, 2))
        // console.log(JSON.stringify(inputFields, null, 2))
    };
    const handleAddFields = () => {
        const values = [...inputFields];
        values.push({ name: '', id_number: '', id_type: '', whatsapp_number: '', contact_number: '', building_name: '', room_number: '', tat: '', alhasna_number: '', email: '' });
        setInputFields(values);
    };

    const handleRemoveFields = index => {
        const values = [...inputFields];
        values.splice(index, 1);
        setInputFields(values);
    };
    const [firstAuth, setFirstAuth] = useState(false)
    const [secondAuth, setSecondAuth] = useState(false)
    const [thirdAuth, setThirdAuth] = useState(false)
    const [employeeList, setEmployeeList] = useState([])
    const [driverList, setDriverList] = useState([])
    const [employee, setEmployee] = useState('')
    const [driver, setDriver] = useState('')
    const [remark, setRemark] = useState('')
    const [noOfTest, setNoOfTest] = useState('')
    const [costPerTest, setCostPerTest] = useState('')
    const [netAmount, setNetAmount] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [driverName, setDriverName] = useState('')
    const [employeeName, setEmployeeName] = useState('')
    const [empLength, setEmpLength] = useState(false)
    const [driLength, setDriLength] = useState(false)
    const [slot, setSlot] = useState(false)
    const [timeList, setTimeList] = useState([])
    const [time, setTime] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [date, setDate] = useState('')
    const [auth, setAuth] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [locations, setLocations] = useState([])
    const [location, setLocation] = useState('')
    const [password, setPassword] = useState('')
    const [age, setAge] = useState('')
    const [shimmer, setShimmer] = useState(false)
    const [designation, setDesignation] = useState('')
    const history = useHistory();
    useEffect(() => {

        if (!localStorage.getItem("token")) {
            history.push('/login')
        } else {
            getData()

        }

    }, [])
  
  
    function getData() {

        const token = JSON.parse(localStorage.getItem("token"))
        const config = {
            headers: { Authorization: `Bearer ${token.token} ` }
        };

        axios.get("dashboard/timeRange", config).then((response) => {
        
            setAuth(response.data)
            setTimeList(response.data);
            setFirstAuth(true)
            console.log(response.data)
         
            setShimmer(true)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            {/* <Header /> */}
            {shimmer ? <div>
                {firstAuth && <div>
                    <Form onSubmit={(e) => {
                            setEmpLength(false)
                            setDriLength(false)
                            setSlot(false)
                        e.preventDefault()
                        const data = {
                            date: date,
                            time: time
                        }
                        const token = JSON.parse(localStorage.getItem("token"))
                        const config = {
                            headers: { Authorization: `Bearer ${token.token} ` }
                        };
                        axios.post('dashboard/getFreeUsers', data, config).then((response) => {
                            console.log(response.data)
                            setDriverList(response.data.driver)
                     
                            setEmployeeList(response.data.employee)
                            console.warn(response.data.driver.length)
                            console.warn(response.data.employee.length)
                            if(response.data.employee.length === 0){
                               setEmpLength(true)
                               console.warn("added")
                               setSlot(true)
                            }
                            if(response.data.driver.length === 0){
                                setDriLength(true)
                                console.warn(" second added")
                                setSlot(true)
                             }
                            setFirstAuth(false)
                            setSecondAuth(true)
                        })

                    }} className="col-sm-6 offset-sm-3 py-8 pl-7  pt-9 pr-5" >
                        <p className="appointmentHead"> Select Date and Time Slot</p>
                        <br />
                        <Row>
                            <Col>
                                <label htmlFor="">Select Date</label>
                                <input type="date" className="form-control" required name="date" value={date} onChange={(e) => { setDate(e.target.value) }} id="" />
                            </Col>
                            <Col>
                                <label htmlFor="">Select Time Slot</label>
                                <Form.Select required className="form-control" name="time" value={time} onChange={(e)=>{
                                    setTime(e.target.value)
                                  setTimeValue(e.target.options[e.target.selectedIndex].text)
                                  console.log(e.target.options[e.target.selectedIndex].text)
                                    
                                }}>
                                    <option className="form-control" value="" >Select</option>
                                        {
                                        timeList.map((e) =>
                                            <option className="form-control" value={e.id}>{e.time}</option>
                                        )
                                    }

                                  </Form.Select>
                            </Col>
                        </Row>
                        <Row className="col-sm-6 offset-sm-3 py-8 pl-7 pt-9 pr-5">
                            <button type="submit" className="btn btn-primary" >Next</button>
                        </Row>
                    </Form>
                </div>}
                {employeeList.le}
                {secondAuth &&  <div>
  
                    <Form onSubmit={(e) => {
                        e.preventDefault()
                        setSecondAuth(false)
                        setThirdAuth(true)
                        console.log(time)
                        console.log(date)
                    }} className="col-sm-6 offset-sm-3 py-8 pl-7  pt-9 pr-5" >
                            <Row className="col-sm-2 offset-sm-9 py-3 pt-6 ">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                setSecondAuth(false)
                                setFirstAuth(true)
                            }} width="30" height="30" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
</svg>
                        </Row>
                        <p className="appointmentHead"> Select Driver and Employee</p>
                         
                        <Row>
                            <Col>
                                <label htmlFor="">Select Driver</label>
                                <Form.Group className="mb-3">

                                    <Form.Select required  value={driver} onChange={(e)=>{
                                        setDriver(e.target.value)
                                        setDriverName(e.target.options[e.target.selectedIndex].text)
                                        }} >
                                    <option value="">Select</option>
                                        {
                                        driverList.map((e) =>
                                            <option value={e.id}>{e.name}</option>
                                        )
                                    }

                                    </Form.Select>
                                </Form.Group> 
                                {driLength && <p className="warn">Drivers not available</p>}
                                  </Col>
                            <Col>
                                <label htmlFor="">Select Employee</label>
                                <Form.Group  className="mb-3">
                                    <Form.Select required  value={employee} onChange={(e)=>{
                                    setEmployee(e.target.value)
                                    setEmployeeName(e.target.options[e.target.selectedIndex].text)
                                    }} >
                                    <option value="">Select</option>
                                        {
                                            employeeList.map((e) =>
                                                <option value={e.id}>{e.name}</option>
                                            )
                                        }

                                    </Form.Select>
                                </Form.Group>
                                {empLength && <p className="warn">Employees not available</p>}
                                 </Col>
                        </Row>
                      
                       
                       <Row className="col-sm-6 offset-sm-3 py-8 pl-7 pt-9 pr-5">
                       {slot ?
                            <button type="submit" className="btn btn-secondary" disabled={true} >Next</button> 
                            :  <button type="submit" className="btn btn-primary" >Next</button>  }
                        </Row> 
                  
                    </Form>
                </div>}

                {thirdAuth && 

<form onSubmit={handleSubmit}>
                    <div className="form-row col-sm-6 offset-sm-3 py-8 pt-2 pl-4 pr-3">
                    <Row className="col-sm-2 offset-sm-9 py-3 pt-6 ">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
                                 setThirdAuth(false)
                                 setSecondAuth(true)
                            }} width="30" height="30" fill="currentColor" class="bi bi-skip-backward-fill" viewBox="0 0 16 16">
  <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/>
</svg>
                 </Row>
                        <br />
                    <p className="appointmentHead">Book Appointment</p>
                    <br />
            
                  <Row className="roww">
            
                      <p className="datetime">Appointment Time: <span className="datetime1">{timeValue}</span> </p>
                      <p className="datetime">Appointment Date: <span className="datetime1" >{date}</span> </p>
                      
                   
                  </Row>
                  <Row>
                  <p className="empp">Employee Name: <span className="empp1" >{employeeName}</span> </p>
                    <p className="empp">Driver Name: <span className="empp1">{driverName}</span> </p>
                  </Row>
                   
                        {inputFields.map((inputField, index) => (
                            <Fragment key={`${inputField}~${index}`}>
                                <h1 className="heading1 pt-5">Client : {index + 1}</h1>
                                <Row>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="name">Name</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={inputField.name}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="lastName">Email</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={inputField.email}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="firstName">Whatsapp Number</label>
                                        <input required
                                            type="number"
                                            className="form-control"
                                            id="whatsapp_number"
                                            name="whatsapp_number"
                                            value={inputField.whatsapp_number}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="lastName">Contact Number </label>
                                        <input required
                                            type="number"
                                            className="form-control"
                                            id="contact_number"
                                            name="contact_number"
                                            value={inputField.contact_number}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="firstName">Building Name</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="building_name"
                                            name="building_name"
                                            value={inputField.building_name}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="lastName">Room Number</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="room_number"
                                            name="room_number"
                                            value={inputField.room_number}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>
                                </Row>
                                <Row>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="firstName">TAT</label>
                                        <Form.Select name="tat" value={inputField.tat} onChange={event => handleInputChange(index, event)} required id=""  >
                                            <option value="">Select</option>
                                            <option value="3">3</option>
                                            <option value="6">6</option>
                                            <option value="12">12</option>
                                        </Form.Select>

                                    </div>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="firstName">Alhasna Number</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="alhasna_number"
                                            name="alhasna_number"
                                            value={inputField.alhasna_number}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>

                                </Row>
                                <Row>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="lastName">ID Type</label>
                                        <Form.Select name="id_type" value={inputField.id_type} onChange={event => handleInputChange(index, event)} required id=""  >
                                            <option value="">Select</option>
                                            <option value="Emirates ID">Emirates Id</option>
                                            <option value="Passport">Passport</option>
                                        </Form.Select>
                                    </div>
                                    <div className="form-group col-sm-6 pt-4">
                                        <label htmlFor="firstName">ID Number</label>
                                        <input required
                                            type="text"
                                            className="form-control"
                                            id="id_number"
                                            name="id_number"
                                            value={inputField.id_number}
                                            onChange={event => handleInputChange(index, event)}
                                        />
                                    </div>

                                </Row>

                                <Row>
                                    <div className="form-group col-sm-2 pt-5">

                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleAddFields()} width="50" height="50" fill="#149018" class="bi bi-cloud-plus-fill" viewBox="0 0 16 16">
                                            <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm.5 4v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </div>
                                    {inputFields.length !== 1 && <div className="form-group col-sm-2 pt-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => handleRemoveFields(index)} width="50" height="50" fill="#F70808" class="bi bi-trash" viewBox="0 0 16 16">
                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                        </svg>
                                    </div>}

                                </Row>
                            </Fragment>
                        ))}
                        <div className="pt-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp" >Remark</label>
                        <input type="text" value={remark} required onChange={(e) => { setRemark(e.target.value) }} className="form-control" id="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp">No of test</label>
                        <input type="number" value={inputFields.length}  readOnly onChange={(e) => { setNoOfTest(inputFields.length) }} className="form-control" id="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp">Cost/Test</label>
                        <input type="number" value={costPerTest} required onChange={(e) => { setCostPerTest(e.target.value) }} className="form-control" id="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp">Location</label>
                        <input type="text" value={location} required onChange={(e) => { setLocation(e.target.value) }} className="form-control" id="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp">Net Amount</label>
                        <input type="number" value={netAmount} required onChange={(e) => { setNetAmount(e.target.value) }} className="form-control" id="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <label className="labelimp">Payment Type</label>
                        <Form.Select name="tat" value={paymentType}  onChange={(e) => { setPaymentType(e.target.value) }} required id=""  >
                                            <option value="">Select</option>
                                            <option value="Card">Card</option>
                                            <option value="Cash">Cash</option>
                                        </Form.Select>
                    </Form.Group>
                        </div>
                        <Row className="pt-5">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                onSubmit={handleSubmit}
                            >
                                SUBMIT
                            </button>
                        </Row>
                    </div>



                </form>



                }
 
            </div> : <div>
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
            </div>}

        </div>
    )
}

export default CreateAppointment
