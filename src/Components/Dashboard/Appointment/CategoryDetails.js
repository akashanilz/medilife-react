import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useHistory, useLocation, useParams } from 'react-router'
import './Appointment.css'

function CategoryDetails(props) {
  const location  = useLocation()
  const history = useHistory()
    const [category, setCategory] = useState('')
    const [client, setClient] = useState('')
    const [address, setAddress] = useState('')
    const [emirate, setEmirate] = useState('')
    const [typeOfClient, setTypeOfClient] = useState('')
    const [clientCategory, setClientCategory] = useState('')
    const [occupationUAE, setOccupationUAE] = useState('')
    const [companyNameUAE, setCompanyNameUAE] = useState('')
    const [companyAddressUAE, setCompanyAddressUAE] = useState('')
    const [emirateUAE, setEmirateUAE] = useState('')
    const [countryVisitTravel, setCountryVisitTravel] = useState('')
    const [arrivingDateTravel, setArrivingDateTravel] = useState('')
    const [departureDateTravel, setDepartureDateTravel] = useState('')
    const [stayLengthTravel, setStayLengthTravel] = useState('')
    const [institutionStudent, setInstitutionStudent] = useState('')
    const [typeStudent, setTypeStudent] = useState('')
    const [detailsStudent, setDetailsStudent] = useState('')
    const [institutionTypeStudent, setInstitutionTypeStudent] = useState('')
    const [locationStudent, setLocationStudent] = useState('')
    const [campNameLabour, setCampNameLabour] = useState('')
    const [addressCampLabour, setAddressCampLabour] = useState('')
    const [supervisorNameLabour, setSupervisorNameLabour] = useState('')
    const [supervisorContactNumberLabour, setSupervisorContactNumberLabour] = useState('')

    
    const id=useParams()
    useEffect(() => {
    
        const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewClient/${id.id}`,config).then((response)=>{
        setClient(response.data.client)
        setClientCategory(response.data.client.client_category)
      
      })
    }, [])
   
    

    const handleSubmit = (e)=>{
      e.preventDefault()
      const data = {
        address : address,
        emirate : emirate,
        type_of_client : typeOfClient,
        client_category : clientCategory,
        occupation_uae : occupationUAE,
        company_name_uae : companyNameUAE,
        company_address_uae :companyAddressUAE,
        emirate_uae : emirateUAE,
        country_visit_travel :countryVisitTravel,
        arriving_date_travel : arrivingDateTravel,
        departure_date_travel : departureDateTravel,
        stay_length_travel : stayLengthTravel,
        institution_student : institutionStudent,
        type_student : typeStudent,
        details_student : detailsStudent,
        institution_type_student : institutionTypeStudent,
        location_student : locationStudent,
        camp_name_labour : campNameLabour,
        address_camp_labour : addressCampLabour,
        supervisor_name_labour : supervisorNameLabour,
        supervisor_contact_number_labour : supervisorContactNumberLabour
      }
      console.log(data)
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.put(`/dashboard/editClient/${id.id}`,data,config).then((response)=>{
       history.push({
         pathname : `/dashboard/viewTaskDetails/${location.state}`,
         state : "success"
       })
      })
    }
    return (
        <div>
        { props.curd ==="add" &&
          <div>
  <form onSubmit={handleSubmit}>
          <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
              <h1 className="head11">{client.name}</h1>
            <Row className="pt-3"> 
            <Col>
                   <label className="label" htmlFor="">Sno</label>
                     <Form.Control  value={client.id} readOnly />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Residential Address</label>
                     <Form.Control required value={address} onChange={(e)=>{setAddress(e.target.value)}} />
                   </Col>
                
                 </Row>
                 <Row className="pt-3"> 
            <Col>
                   <label className="label" htmlFor="">Emirate</label>
                     <Form.Control required value={emirate} onChange={(e)=>{setEmirate(e.target.value)}} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Select Type</label>
                   <Form.Select value={typeOfClient} onChange={(e)=>{setTypeOfClient(e.target.value)}} required size="lg">
                   <option value="">Select Type</option>
                   <option value="Resident">   Residant</option>
                   <option value="Transit">Transit</option>
    <option value="Visitor">Visitor</option>
    <option value="Other">   Other</option>
  </Form.Select>
                   </Col>
                
                 </Row>
            <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Select Category</label>
                   <br />
                   <Form.Select value={clientCategory} onChange={(e)=>{setClientCategory(e.target.value)}} size="lg">
                   <option value="">Select Category</option>
                   <option value="uae">   UAE Residance</option>
                   <option value="travel">   Travel History Within 14 Days</option>
    <option value="student">   Student/Educational Staff</option>
    <option value="labour">   Labour</option>
  </Form.Select>
                   </Col>
                 </Row>
             {clientCategory=="uae" &&     
             <div>
                 <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Ocupation</label>
                     <Form.Control  value={occupationUAE} onChange={(e)=>{setOccupationUAE(e.target.value)}}  required />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Company Name</label>
                     <Form.Control  value={companyNameUAE} onChange={(e)=>{setCompanyNameUAE(e.target.value)}} required />
                   </Col>
                 </Row>
                 <Row className="pt-3"> 
                 <Col>
                 <label className="label" htmlFor="">Company Address</label>
                   <Form.Control required   value={companyAddressUAE} onChange={(e)=>{setCompanyAddressUAE(e.target.value)}} />
                 </Col>
                 <Col>
                 <label className="label" htmlFor="">Emirate</label>
                   <Form.Control required  value={emirateUAE} onChange={(e)=>{setEmirateUAE(e.target.value)}} />
                 </Col>
               </Row>
             </div>
                 }
                 {clientCategory=="travel" &&    
                          <div>
                          <Row className="pt-3"> 
                            <Col>
                            <label className="label" htmlFor="">Country of visit</label>
                              <Form.Control required  value={countryVisitTravel} onChange={(e)=>{setCountryVisitTravel(e.target.value)}} />
                            </Col>
                            <Col>
                            <label className="label" htmlFor="">Arriving date</label>
                              <Form.Control required  value={arrivingDateTravel} onChange={(e)=>{setArrivingDateTravel(e.target.value)}} type="date" />
                            </Col>
                          </Row>
                          <Row className="pt-3"> 
                          <Col>
                          <label className="label" htmlFor="">Departure Date</label>
                            <Form.Control required type="date"  value={departureDateTravel} onChange={(e)=>{setDepartureDateTravel(e.target.value)}}  />
                          </Col>
                          <Col>
                          <label className="label" htmlFor="">Length of stay</label>
                            <Form.Control  value={stayLengthTravel} onChange={(e)=>{setStayLengthTravel(e.target.value)}} required />
                          </Col>
                        </Row>
                      </div>
                 
                 }
                 {clientCategory=="student" &&     
                               <div>
                               <Row className="pt-3"> 
                                 <Col>
                                 <label className="label" htmlFor="">Institution</label>
                                   <Form.Control  value={institutionStudent} onChange={(e)=>{setInstitutionStudent(e.target.value)}} required  />
                                 </Col>
                                 <Col>
                                 <label className="label" htmlFor="">Type</label>
                                 <Form.Select  value={typeStudent} onChange={(e)=>{setTypeStudent(e.target.value)}} required size="lg">
                   <option value="">Select Type</option>
                   <option value="uae">  Student </option>
                   <option value="travel">Staff</option>
  
  </Form.Select>
                                 </Col>
                               </Row>
                               <Row className="pt-3"> 
                               <Col>
                               <label className="label" htmlFor="">Student/Staff Details</label>
                                 <Form.Control required   value={detailsStudent} onChange={(e)=>{setDetailsStudent(e.target.value)}} />
                               </Col>
                               <Col>
                               <label className="label" htmlFor="">Institution Type</label>
                                 <Form.Control required  value={institutionTypeStudent} onChange={(e)=>{setInstitutionTypeStudent(e.target.value)}} />
                               </Col>
                             </Row>
                             <Row className="pt-3"> 
                               <Col>
                               <label className="label" htmlFor="">Location</label>
                                 <Form.Control required  value={locationStudent} onChange={(e)=>{setLocationStudent(e.target.value)}}  />
                               </Col>
                            
                             </Row>
                           </div>
                 }
                 {clientCategory=="labour" &&     
                            <div>
                            <Row className="pt-3"> 
                              <Col>
                              <label className="label" htmlFor="">Labour Camp Name</label>
                                <Form.Control required  value={campNameLabour} onChange={(e)=>{setCampNameLabour(e.target.value)}} />
                              </Col>
                              <Col>
                              <label className="label" htmlFor="">Address</label>
                                <Form.Control required  value={addressCampLabour} onChange={(e)=>{setAddressCampLabour(e.target.value)}} />
                              </Col>
                            </Row>
                            <Row className="pt-3"> 
                            <Col>
                            <label className="label" htmlFor="">Camp supervisor name</label>
                              <Form.Control required value={supervisorNameLabour} onChange={(e)=>{setSupervisorNameLabour(e.target.value)}} />
                            </Col>
                            <Col>
                            <label className="label" htmlFor="">Camp supervisor contact number</label>
                              <Form.Control required value={supervisorContactNumberLabour} onChange={(e)=>{setSupervisorContactNumberLabour(e.target.value)}} />
                            </Col>
                          </Row>
                        </div>
                 }
                 <br />
                {clientCategory &&  <button className="btn btn-primary" type="submit">Submit</button>}
            </div>
          </form>
          </div>
        }

{ client.status =="1" &&
          <div>
  <form onSubmit={handleSubmit}>
          <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
              <h1 className="head11">{client.name}</h1>
            <Row className="pt-3"> 
            <Col>
                   <label className="label" htmlFor="">Sno</label>
                     <Form.Control  value={client.id} readOnly />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Residential Address</label>
                     <Form.Control required defaultValue={client.address} onChange={(e)=>{setAddress(e.target.value)}} />
                   </Col>
                
                 </Row>
                 <Row className="pt-3"> 
            <Col>
                   <label className="label" htmlFor="">Emirate</label>
                     <Form.Control required defaultValue={client.emirate} onChange={(e)=>{setEmirate(e.target.value)}} />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Select Type</label>
                   <Form.Select defaultValue={client.type_of_client} onChange={(e)=>{setTypeOfClient(e.target.value)}} required size="lg">
                   <option value="">Select Type</option>
                   <option value="Resident">   Residant</option>
                   <option value="Transit">Transit</option>
    <option value="Visitor">Visitor</option>
    <option value="Other">   Other</option>
  </Form.Select>
                   </Col>
                
                 </Row>
            <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Select Category</label>
                   <br />
                   <Form.Select value={clientCategory} onChange={(e)=>{setClientCategory(e.target.value)}} size="lg">
                   <option value="">Select Category</option>
                   <option value="uae">   UAE Residance</option>
                   <option value="travel">   Travel History Within 14 Days</option>
    <option value="student">   Student/Educational Staff</option>
    <option value="labour">   Labour</option>
  </Form.Select>
                   </Col>
                 </Row>
             {clientCategory=="uae" &&     
             <div>
                 <Row className="pt-3"> 
                   <Col>
                   <label className="label" htmlFor="">Ocupation</label>
                     <Form.Control  defaultValue={client.occupation_uae} onChange={(e)=>{setOccupationUAE(e.target.value)}}  required />
                   </Col>
                   <Col>
                   <label className="label" htmlFor="">Company Name</label>
                     <Form.Control  defaultValue={client.company_name_uae} onChange={(e)=>{setCompanyNameUAE(e.target.value)}} required />
                   </Col>
                 </Row>
                 <Row className="pt-3"> 
                 <Col>
                 <label className="label" htmlFor="">Company Address</label>
                   <Form.Control required   defaultValue={client.company_address_uae} onChange={(e)=>{setCompanyAddressUAE(e.target.value)}} />
                 </Col>
                 <Col>
                 <label className="label" htmlFor="">Emirate</label>
                   <Form.Control required  defaultValue={client.emirate_uae} onChange={(e)=>{setEmirateUAE(e.target.value)}} />
                 </Col>
               </Row>
             </div>
                 }
                 {clientCategory=="travel" &&    
                          <div>
                          <Row className="pt-3"> 
                            <Col>
                            <label className="label" htmlFor="">Country of visit</label>
                              <Form.Control required  defaultValue={client.country_visit_travel} onChange={(e)=>{setCountryVisitTravel(e.target.value)}} />
                            </Col>
                            <Col>
                            <label className="label" htmlFor="">Arriving date</label>
                              <Form.Control required  defaultValue={client.arriving_date_travel} onChange={(e)=>{setArrivingDateTravel(e.target.value)}} type="date" />
                            </Col>
                          </Row>
                          <Row className="pt-3"> 
                          <Col>
                          <label className="label" htmlFor="">Departure Date</label>
                            <Form.Control required type="date"  defaultValue={client.departure_date_travel} onChange={(e)=>{setDepartureDateTravel(e.target.value)}}  />
                          </Col>
                          <Col>
                          <label className="label" htmlFor="">Length of stay</label>
                            <Form.Control  defaultValue={client.stay_length_travel} onChange={(e)=>{setStayLengthTravel(e.target.value)}} required />
                          </Col>
                        </Row>
                      </div>
                 
                 }
                 {clientCategory=="student" &&     
                               <div>
                               <Row className="pt-3"> 
                                 <Col>
                                 <label className="label" htmlFor="">Institution</label>
                                   <Form.Control  defaultValue={client.institution_student} onChange={(e)=>{setInstitutionStudent(e.target.value)}} required  />
                                 </Col>
                                 <Col>
                                 <label className="label" htmlFor="">Type</label>
                                 <Form.Select  defaultValue={client.type_student} onChange={(e)=>{setTypeStudent(e.target.value)}} required size="lg">
                   <option value="">Select Type</option>
                   <option value="uae">  Student </option>
                   <option value="travel">Staff</option>
  
  </Form.Select>
                                 </Col>
                               </Row>
                               <Row className="pt-3"> 
                               <Col>
                               <label className="label" htmlFor="">Student/Staff Details</label>
                                 <Form.Control required   defaultValue={client.details_student} onChange={(e)=>{setDetailsStudent(e.target.value)}} />
                               </Col>
                               <Col>
                               <label className="label" htmlFor="">Institution Type</label>
                                 <Form.Control required  defaultValue={client.institution_type_student} onChange={(e)=>{setInstitutionTypeStudent(e.target.value)}} />
                               </Col>
                             </Row>
                             <Row className="pt-3"> 
                               <Col>
                               <label className="label" htmlFor="">Location</label>
                                 <Form.Control required  defaultValue={client.location_student} onChange={(e)=>{setLocationStudent(e.target.value)}}  />
                               </Col>
                            
                             </Row>
                           </div>
                 }
                 {clientCategory=="labour" &&     
                            <div>
                            <Row className="pt-3"> 
                              <Col>
                              <label className="label" htmlFor="">Labour Camp Name</label>
                                <Form.Control required  defaultValue={client.camp_name_labour} onChange={(e)=>{setCampNameLabour(e.target.value)}} />
                              </Col>
                              <Col>
                              <label className="label" htmlFor="">Address</label>
                                <Form.Control required  defaultValue={client.address_camp_labour} onChange={(e)=>{setAddressCampLabour(e.target.value)}} />
                              </Col>
                            </Row>
                            <Row className="pt-3"> 
                            <Col>
                            <label className="label" htmlFor="">Camp supervisor name</label>
                              <Form.Control required defaultValue={client.supervisor_name_labour} onChange={(e)=>{setSupervisorNameLabour(e.target.value)}} />
                            </Col>
                            <Col>
                            <label className="label" htmlFor="">Camp supervisor contact number</label>
                              <Form.Control required defaultValue={client.supervisor_contact_number_labour} onChange={(e)=>{setSupervisorContactNumberLabour(e.target.value)}} />
                            </Col>
                          </Row>
                        </div>
                 }
                 <br />
                {client &&  <button className="btn btn-warning" type="submit">Submit</button>}
            </div>
          </form>
          </div>
        }
        </div>
    )
}

export default CategoryDetails

