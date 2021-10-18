import React from 'react'
import { useLocation } from 'react-router';
import CreateAppointment from './CreateAppointment'
function ConfirmAppointmentsClients() {
    const location = useLocation();
    const id = location.state;
    return (
        <div>
            <CreateAppointment curd="client" id={id}/>
        </div>
    )
}

export default ConfirmAppointmentsClients
