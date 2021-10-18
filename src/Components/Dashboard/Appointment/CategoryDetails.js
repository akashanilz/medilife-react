import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useHistory, useLocation, useParams } from 'react-router'
import './Appointment.css'
import { idCardURL } from '../../Constants/Constants'
import { BeatLoader } from 'react-spinners';
import { css } from "@emotion/react";
function CategoryDetails(props) {
  const location = useLocation()
  const history = useHistory()
  const [category, setCategory] = useState('')
  const [client, setClient] = useState('')
  const [image, setImage] = useState('')
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
  const [sampleId, setSampleId] = useState('')
  const [rackNumber, setRackNumber] = useState('')
  const [mrn, setMrn] = useState('')
  const [dob, setDob] = useState('')
  const [gender, setGender] = useState('')
  const [nationality, setNationality] = useState('')
  const [ai, setAi] = useState('')
  const [city, setCity] = useState('')
  const [detailsStudent, setDetailsStudent] = useState('')
  const [institutionTypeStudent, setInstitutionTypeStudent] = useState('')
  const [locationStudent, setLocationStudent] = useState('')
  const [campNameLabour, setCampNameLabour] = useState('')
  const [addressCampLabour, setAddressCampLabour] = useState('')
  const [supervisorNameLabour, setSupervisorNameLabour] = useState('')
  const [supervisorContactNumberLabour, setSupervisorContactNumberLabour] = useState('')

  const override = css`
  display: block;
  margin: 2 auto;
  size:30;`;
  let [loading, setLoading] = useState(true);
  let [loader, setLoader] = useState(false);
  let [color, setColor] = useState("blue");
  const id = useParams()
  useEffect(() => {

    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    axios.get(`/dashboard/viewClient/${id.id}`, config).then((response) => {
      console.log(response.data)
      setClient(response.data.client)
      setClientCategory(response.data.client.client_category)

    })
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    setLoader(true)
    const formData = new FormData();
    formData.append('sample_id', sampleId);
    formData.append('rack_number', rackNumber);
    formData.append('mrn', mrn);
    formData.append('dob', dob);
    formData.append('gender', gender);
    formData.append('nationality', nationality);
    formData.append('ai', ai);
    formData.append('city', city);
    formData.append('image', image);
    formData.append('address', address);
    formData.append('emirate', emirate);
    formData.append('type_of_client', typeOfClient);
    formData.append('client_category', clientCategory);
    formData.append('occupation_uae', occupationUAE);
    formData.append('company_name_uae', companyNameUAE);
    formData.append('company_address_uae', companyAddressUAE);
    formData.append('emirate_uae', emirateUAE);
    formData.append('country_visit_travel', countryVisitTravel);
    formData.append('arriving_date_travel', arrivingDateTravel);
    formData.append('departure_date_travel', departureDateTravel);
    formData.append('stay_length_travel', stayLengthTravel);
    formData.append('institution_student', institutionStudent);
    formData.append('type_student', typeStudent);
    formData.append('details_student', detailsStudent);
    formData.append('institution_type_student', institutionTypeStudent);
    formData.append('location_student', locationStudent);
    formData.append('camp_name_labour', campNameLabour);
    formData.append('address_camp_labour', addressCampLabour);
    formData.append('supervisor_name_labour', supervisorNameLabour);
    formData.append('supervisor_contact_number_labour', supervisorContactNumberLabour);
    console.log(formData)
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };
    axios.post(`/dashboard/editClient/${id.id}`, formData, config).then((response) => {
      if (props.role == "employee") {
        history.push({

          pathname: `/dashboard/viewTaskDetails/${location.state}`,
          state: "success"
        })
      }
      if (props.role == "admin") {
        history.push({

          pathname: `/dashboard/viewAppointment/${location.state}`,
          state: "success"
        })
      }

    }).catch(err => {
      setLoader(false)
    })
  }

  // const data = {
  //   address : address,
  //   emirate : emirate,
  //   type_of_client : typeOfClient,
  //   client_category : clientCategory,
  //   occupation_uae : occupationUAE,
  //   company_name_uae : companyNameUAE,
  //   company_address_uae :companyAddressUAE,
  //   emirate_uae : emirateUAE,
  //   country_visit_travel :countryVisitTravel,
  //   arriving_date_travel : arrivingDateTravel,
  //   departure_date_travel : departureDateTravel,
  //   stay_length_travel : stayLengthTravel,
  //   institution_student : institutionStudent,
  //   type_student : typeStudent,
  //   details_student : detailsStudent,
  //   institution_type_student : institutionTypeStudent,
  //   location_student : locationStudent,
  //   camp_name_labour : campNameLabour,
  //   address_camp_labour : addressCampLabour,
  //   supervisor_name_labour : supervisorNameLabour,
  //   supervisor_contact_number_labour : supervisorContactNumberLabour
  // }
  // console.log(data)
  // const token = JSON.parse(localStorage.getItem("token"))
  // const config = {
  //   headers: { Authorization: `Bearer ${token.token} ` }
  // };
  // axios.put(`/dashboard/editClient/${id.id}`,data,config).then((response)=>{
  //  history.push({
  //    pathname : `/dashboard/viewTaskDetails/${location.state}`,
  //    state : "success"
  //  })
  // })

  return (
    <div>
      <p>{arrivingDateTravel}</p>
 {client.length == 0 && <p className="empty">Empty</p>}
      {props.curd === "add" &&
        <div>
          <form onSubmit={handleSubmit}>
            <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
              <h1 className="head11">{client.name}</h1>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Sno</label>
                  <Form.Control value={client.id} readOnly />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Residential Address</label>
                  <Form.Control required value={address} onChange={(e) => { setAddress(e.target.value) }} />
                </Col>

              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Emirate</label>
                  <Form.Control required value={emirate} onChange={(e) => { setEmirate(e.target.value) }} />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Select Type</label>
                  <Form.Select value={typeOfClient} onChange={(e) => { setTypeOfClient(e.target.value) }} required size="lg">
                    <option value="">Select Type</option>
                    <option value="Resident">   Residant</option>
                    <option value="Transit">Transit</option>
                    <option value="Visitor">Visitor</option>
                    <option value="Other">   Other</option>
                  </Form.Select>
                </Col>

              </Row >
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">DOB</label>
                  <Form.Control type="date" required value={dob} onChange={(e) => { setDob(e.target.value) }} />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Nationality</label>
                  <Form.Control required value={nationality} onChange={(e) => { setNationality(e.target.value) }} />
                </Col>

              </Row>
              <Row className="pt-3">
                <Col>
                  <label htmlFor="">Image</label>
                  <input onChange={(e) => { setImage(e.target.files[0]) }} required className="form-control" name="image" type="file" />
                </Col>
                <Col>
                  <label className="label" htmlFor="">City</label>
                  <Form.Control defaultValue={city} required onChange={(e) => { setCity(e.target.value) }} />
                </Col>

              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Gender</label>
                  <br />
                  <Form.Select value={gender} onChange={(e) => { setGender(e.target.value) }} size="lg">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Select Category</label>
                  <br />
                  <Form.Select value={clientCategory} onChange={(e) => { setClientCategory(e.target.value) }} size="lg">
                    <option value="">Select Category</option>
                    <option value="uae">   UAE Residance</option>
                    <option value="travel">   Travel History Within 14 Days</option>
                    <option value="student">   Student/Educational Staff</option>
                    <option value="labour">   Labour</option>
                  </Form.Select>
                </Col>
              </Row>
              {clientCategory == "uae" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Ocupation</label>
                      <Form.Control value={occupationUAE} onChange={(e) => { setOccupationUAE(e.target.value) }} required />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Company Name</label>
                      <Form.Control value={companyNameUAE} onChange={(e) => { setCompanyNameUAE(e.target.value) }} required />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Company Address</label>
                      <Form.Control required value={companyAddressUAE} onChange={(e) => { setCompanyAddressUAE(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Emirate</label>
                      <Form.Control required value={emirateUAE} onChange={(e) => { setEmirateUAE(e.target.value) }} />
                    </Col>
                  </Row>
                </div>
              }
              {clientCategory == "travel" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Country of visit</label>
                      <Form.Control required value={countryVisitTravel} onChange={(e) => { setCountryVisitTravel(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Arriving date</label>
                      <Form.Control required value={arrivingDateTravel} onChange={(e) => { setArrivingDateTravel(e.target.value) }} type="date" />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Departure Date</label>
                      <Form.Control required type="date" value={departureDateTravel} onChange={(e) => { setDepartureDateTravel(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Length of stay</label>
                      <Form.Control value={stayLengthTravel} onChange={(e) => { setStayLengthTravel(e.target.value) }} required />
                    </Col>
                  </Row>
                </div>

              }
              {clientCategory == "student" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Institution</label>
                      <Form.Control value={institutionStudent} onChange={(e) => { setInstitutionStudent(e.target.value) }} required />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Type</label>
                      <Form.Select value={typeStudent} onChange={(e) => { setTypeStudent(e.target.value) }} required size="lg">
                        <option value="">Select Type</option>
                        <option value="uae">  Student </option>
                        <option value="travel">Staff</option>

                      </Form.Select>
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Student/Staff Details</label>
                      <Form.Control required value={detailsStudent} onChange={(e) => { setDetailsStudent(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Institution Type</label>
                      <Form.Control required value={institutionTypeStudent} onChange={(e) => { setInstitutionTypeStudent(e.target.value) }} />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Location</label>
                      <Form.Control required value={locationStudent} onChange={(e) => { setLocationStudent(e.target.value) }} />
                    </Col>

                  </Row>
                </div>
              }
              {clientCategory == "labour" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Labour Camp Name</label>
                      <Form.Control required value={campNameLabour} onChange={(e) => { setCampNameLabour(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Address</label>
                      <Form.Control required value={addressCampLabour} onChange={(e) => { setAddressCampLabour(e.target.value) }} />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Camp supervisor name</label>
                      <Form.Control required value={supervisorNameLabour} onChange={(e) => { setSupervisorNameLabour(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Camp supervisor contact number</label>
                      <Form.Control required value={supervisorContactNumberLabour} onChange={(e) => { setSupervisorContactNumberLabour(e.target.value) }} />
                    </Col>
                  </Row>
                </div>
              }
              <br />
              {clientCategory && <button className="btn btn-primary" type="submit">Submit</button>}
            </div>
          </form>
        </div>
      }

      {client.status == "1" &&
        <div>
          <form onSubmit={handleSubmit}>
            <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
              <h1 className="head11">{client.name}</h1>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Sno</label>
                  <Form.Control value={client.id} readOnly />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Residential Address</label>
                  <Form.Control required defaultValue={client.address} onChange={(e) => { setAddress(e.target.value) }} />
                </Col>

              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">DOB</label>
                  <Form.Control type="date" defaultValue={client.dob} onChange={(e) => { setDob(e.target.value) }} />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Nationality</label>
                  <Form.Control required defaultValue={client.nationality} onChange={(e) => { setNationality(e.target.value) }} />
                </Col>

              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">City</label>
                  <Form.Control defaultValue={client.city} onChange={(e) => { setCity(e.target.value) }} />
                </Col>
                {props.role == "admin" &&
                  <Col>
                    <label className="label" htmlFor="">MRN</label>
                    <Form.Control defaultValue={client.mrn} onChange={(e) => { setMrn(e.target.value) }} />
                  </Col>
                }

              </Row>
              {
                props.role == "admin" &&
                <Row className="pt-3">
                  <Col>
                    <label className="label" htmlFor="">Sample ID</label>
                    <Form.Control defaultValue={client.sample_id} onChange={(e) => { setSampleId(e.target.value) }} />
                  </Col>
                  <Col>
                    <label className="label" htmlFor="">Rack Number</label>
                    <Form.Control  defaultValue={client.rack_number} onChange={(e) => { setRackNumber(e.target.value) }} />
                  </Col>

                </Row>}

              {props.role == "admin" && <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">AI (Additional Identifier)</label>
                  <Form.Control defaultValue={client.ai} onChange={(e) => { setAi(e.target.value) }} />
                </Col>

              </Row>}
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Emirate</label>
                  <Form.Control required defaultValue={client.emirate} onChange={(e) => { setEmirate(e.target.value) }} />
                </Col>
                <Col>
                  <label className="label" htmlFor="">Select Type</label>
                  <Form.Select defaultValue={client.type_of_client} onChange={(e) => { setTypeOfClient(e.target.value) }} required size="lg">
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
                  <label className="label" htmlFor="">ID Image</label>
                  <input onChange={(e) => { setImage(e.target.files[0]) }} className="form-control" name="image" type="file" />
                </Col>

                {client.id_image &&
                  <Col>
                    <label className="label" htmlFor="">Image</label>
                    <img src={`${idCardURL + client.id_image}`} onChange={(e) => { setImage(e.target.files[0]) }} width="100" />
                  </Col>
                }
              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Gender</label>
                  <br />
                  <Form.Select value={client.gender} onChange={(e) => { setGender(e.target.value) }} size="lg">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row className="pt-3">
                <Col>
                  <label className="label" htmlFor="">Select Category</label>
                  <br />
                  <Form.Select required value={clientCategory} onChange={(e) => { setClientCategory(e.target.value) }} size="lg">
                    <option value="">Select Category</option>
                    <option value="uae">   UAE Residance</option>
                    <option value="travel">   Travel History Within 14 Days</option>
                    <option value="student">   Student/Educational Staff</option>
                    <option value="labour">   Labour</option>
                  </Form.Select>
                </Col>
              </Row>
              {clientCategory == "uae" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Ocupation</label>
                      <Form.Control defaultValue={client.occupation_uae} onChange={(e) => { setOccupationUAE(e.target.value) }} required />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Company Name</label>
                      <Form.Control defaultValue={client.company_name_uae} onChange={(e) => { setCompanyNameUAE(e.target.value) }} required />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Company Address</label>
                      <Form.Control required defaultValue={client.company_address_uae} onChange={(e) => { setCompanyAddressUAE(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Emirate</label>
                      <Form.Control required defaultValue={client.emirate_uae} onChange={(e) => { setEmirateUAE(e.target.value) }} />
                    </Col>
                  </Row>
                </div>
              }
              {clientCategory == "travel" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Country of visit</label>
                      <Form.Control required defaultValue={client.country_visit_travel} onChange={(e) => { setCountryVisitTravel(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Arriving date</label>
                      <Form.Control required defaultValue={client.arriving_date_travel} onChange={(e) => { setArrivingDateTravel(e.target.value) }} type="date" />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Departure Date</label>
                      <Form.Control required type="date" defaultValue={client.departure_date_travel} onChange={(e) => { setDepartureDateTravel(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Length of stay</label>
                      <Form.Control defaultValue={client.stay_length_travel} onChange={(e) => { setStayLengthTravel(e.target.value) }} required />
                    </Col>
                  </Row>
                </div>

              }
              {clientCategory == "student" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Institution</label>
                      <Form.Control defaultValue={client.institution_student} onChange={(e) => { setInstitutionStudent(e.target.value) }} required />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Type</label>
                      <Form.Select defaultValue={client.type_student} onChange={(e) => { setTypeStudent(e.target.value) }} required size="lg">
                        <option value="">Select Type</option>
                        <option value="uae">  Student </option>
                        <option value="travel">Staff</option>

                      </Form.Select>
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Student/Staff Details</label>
                      <Form.Control required defaultValue={client.details_student} onChange={(e) => { setDetailsStudent(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Institution Type</label>
                      <Form.Control required defaultValue={client.institution_type_student} onChange={(e) => { setInstitutionTypeStudent(e.target.value) }} />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Location</label>
                      <Form.Control required defaultValue={client.location_student} onChange={(e) => { setLocationStudent(e.target.value) }} />
                    </Col>

                  </Row>
                </div>
              }
              {clientCategory == "labour" &&
                <div>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Labour Camp Name</label>
                      <Form.Control required defaultValue={client.camp_name_labour} onChange={(e) => { setCampNameLabour(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Address</label>
                      <Form.Control required defaultValue={client.address_camp_labour} onChange={(e) => { setAddressCampLabour(e.target.value) }} />
                    </Col>
                  </Row>
                  <Row className="pt-3">
                    <Col>
                      <label className="label" htmlFor="">Camp supervisor name</label>
                      <Form.Control required defaultValue={client.supervisor_name_labour} onChange={(e) => { setSupervisorNameLabour(e.target.value) }} />
                    </Col>
                    <Col>
                      <label className="label" htmlFor="">Camp supervisor contact number</label>
                      <Form.Control required defaultValue={client.supervisor_contact_number_labour} onChange={(e) => { setSupervisorContactNumberLabour(e.target.value) }} />
                    </Col>
                  </Row>
                </div>
              }
              <br />

              {clientCategory &&
                <div>
                  {
                    loader ? <Button variant="secondary" disabled={true} >
                      Submit
                    </Button> :
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                  }
                </div>
              }

              <div className="flex justify-center">
                {loader && <BeatLoader color={color} loading={loading} css={override} size={20} />}
              </div>
            </div>
          </form>
        </div>
      }
    </div>
  )
}


export default CategoryDetails

