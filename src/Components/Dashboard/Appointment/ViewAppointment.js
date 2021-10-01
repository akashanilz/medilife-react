import React from 'react'
import { useParams } from 'react-router'
import AppointmentDetails from './AppointmentDetails'

function ViewAppointment() {
    const id= useParams()
    return (
        <div>
            <AppointmentDetails id={id.id} curd="viewAppointment"/>
        </div>
    )
}

export default ViewAppointment
