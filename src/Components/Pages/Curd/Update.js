import axios from '../../axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Update(props) {
  const id = useParams()
  useEffect(() => {
    if (localStorage.getItem("token")) {
     getItem();
    }
  }, [])
  function getItem(){
    if(props.curd==="client"){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewClient/${props.id}`,config).then((response)=>{
        console.log(response.data.client)
      })
    }
    if(props.curd==="employee"){
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get(`/dashboard/viewEmployee/${props.id}`,config).then((response)=>{
        console.log(response.data)
      })
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default Update
