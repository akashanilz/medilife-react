import axios from '../../axios'
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { useHistory, useLocation, useParams } from 'react-router'

function CreateNewClient() {
  const id = useParams()
  const location = useLocation()
  const history = useHistory()
  const [category, setCategory] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [whatsappNumber, setWhatsappNumber] = useState('')
  const [buildingName, setBuildingName] = useState('')
  const [roomNumber, setRoomNumber] = useState('')
  const [alhasnaNumber, setAlhasnaNumber] = useState('')
  const [tat, setTat] = useState('')
  const [idType, setIdType] = useState('')
  const [idNumber, setIdNumber] = useState('')
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
  const data = {

    address: address,
    emirate: emirate,
    name: name,
    tat: tat,
    email: email,
    building_name: buildingName,
    room_number: roomNumber,
    alhasna_number: alhasnaNumber,
    id_type: idType,
    id_number: idNumber,
    contact_number: contactNumber,
    whatsapp_number: whatsappNumber,
    type_of_client: typeOfClient,
    client_category: clientCategory,
    occupation_uae: occupationUAE,
    company_name_uae: companyNameUAE,
    company_address_uae: companyAddressUAE,
    emirate_uae: emirateUAE,
    country_visit_travel: countryVisitTravel,
    arriving_date_travel: arrivingDateTravel,
    departure_date_travel: departureDateTravel,
    stay_length_travel: stayLengthTravel,
    institution_student: institutionStudent,
    type_student: typeStudent,
    appointment_id: id.id,
    details_student: detailsStudent,
    institution_type_student: institutionTypeStudent,
    location_student: locationStudent,
    camp_name_labour: campNameLabour,
    address_camp_labour: addressCampLabour,
    supervisor_name_labour: supervisorNameLabour,
    supervisor_contact_number_labour: supervisorContactNumberLabour
  }
  const handleSubmit = (e) => {

    e.preventDefault()
    const token = JSON.parse(localStorage.getItem("token"))
    const config = {
      headers: { Authorization: `Bearer ${token.token} ` }
    };

    axios.post("dashboard/createClient", data, config).then((response) => {
      history.push({
        pathname: `/dashboard/viewTaskDetails/${id.id}`,
        state: "success"
      })
    })
  }

  return (
    <div> <h1 className="head11">Create Clent</h1>
      <form onSubmit={handleSubmit} >
        <div className="col-sm-6 offset-sm-3 py-8 pr-10  pl-10">
          <h1 className="head11">{client.name}</h1>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Name</label>
              <Form.Control required value={name} onChange={(e) => { setName(e.target.value) }} />
            </Col>
            <Col>
              <label className="label" htmlFor="">Contact Number</label>
              <Form.Control required value={contactNumber} onChange={(e) => { setContactNumber(e.target.value) }} />
            </Col>

          </Row>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Email</label>
              <Form.Control required value={email} onChange={(e) => { setEmail(e.target.value) }} />
            </Col>
            <Col>
              <label className="label" htmlFor="">Building Name</label>
              <Form.Control required value={buildingName} onChange={(e) => { setBuildingName(e.target.value) }} />
            </Col>

          </Row>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Room number</label>
              <Form.Control required value={roomNumber} onChange={(e) => { setRoomNumber(e.target.value) }} />
            </Col>
            <Col>
              <label className="label" htmlFor="">TAT</label>
              <Form.Select name="tat" required value={tat} onChange={(e) => { setTat(e.target.value) }} required id=""  >
                <option value="">Select</option>
                <option value="3">3</option>
                <option value="6">6</option>
                <option value="12">12</option>
              </Form.Select>
            </Col>

          </Row>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Id Number</label>
              <Form.Control required value={idNumber} onChange={(e) => { setIdNumber(e.target.value) }} />
            </Col>
            <Col>
              <label className="label" htmlFor="">ID Type</label>
              <Form.Select name="tat" required value={idType} onChange={(e) => { setIdType(e.target.value) }} required id=""  >
                <option value="">Select</option>
                <option value="Passport">Passport</option>
                <option value="Emirates ID">Emirates ID</option>

              </Form.Select>
            </Col>

          </Row>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Whatsapp Number</label>
              <Form.Control required value={whatsappNumber} onChange={(e) => { setWhatsappNumber(e.target.value) }} />
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

          </Row>
          <Row className="pt-3">
            <Col>
              <label className="label" htmlFor="">Alhasna Number</label>
              <Form.Control value={alhasnaNumber} onChange={(e) => { setAlhasnaNumber(e.target.value) }} />
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
  )
}

export default CreateNewClient
