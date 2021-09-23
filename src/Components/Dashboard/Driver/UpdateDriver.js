import React from 'react'
import { useParams } from 'react-router'
import Update from '../../Pages/Curd/Update'

function UpdateDriver() {
    const id=useParams()
    return (
        <div>
              <Update curd="driver" id={id.id} />
        </div>
    )
}

export default UpdateDriver
