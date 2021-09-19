import React from 'react'
import { useParams } from 'react-router'
import Update from '../../Pages/Curd/Update'

function EditEmployee() {
    const id=useParams()
    return (
        <div>
             <Update curd="employee" id={id.id} />
        </div>
    )
}

export default EditEmployee
