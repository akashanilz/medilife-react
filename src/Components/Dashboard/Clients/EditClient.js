import React from 'react'
import { useParams } from 'react-router'
import Update from '../../Pages/Curd/Update'

function EditClient() {
    const id = useParams()
    return (
        <div>
            <Update curd="client" id={id.id} />
        </div>
    )
}

export default EditClient
