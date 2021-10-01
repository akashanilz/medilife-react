import React from 'react'
import { useLocation, useParams } from 'react-router'
import Update from '../../Pages/Curd/Update'
import CategoryDetails from '../Appointment/CategoryDetails'

function EditClient(props) {
   
    const id = useParams()
    return (
        <div>
           
            <CategoryDetails curd="edit" role="employee" />
        </div>
    )
}

export default EditClient
