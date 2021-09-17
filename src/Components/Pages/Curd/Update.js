import React from 'react'
import { useParams } from 'react-router-dom'

function Update() {
  const id = useParams()
  return (
    <div>
       <p>{id.id}</p>
    </div>
  )
}

export default Update
