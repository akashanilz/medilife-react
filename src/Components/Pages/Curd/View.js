import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './View.css'
import { useHistory, useLocation } from 'react-router'
import Header from '../../Dashboard/Header/Header'
import { toast, ToastContainer } from 'react-toastify';

function View(props) {
  const notify = () => toast('🦄 Successfully created!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const location = useLocation()
  console.log(location.state)
  const history = useHistory();
  const [shimmer, setShimmer] = useState(true)
  const [clients, setClients] = useState([])
  useEffect(() => {
    if (location.state === "success") {
      notify()
      history.replace()
    }

    if (localStorage.getItem("token")) {

    getData()

    }

  }, [])
  function getData(){
    if (props.curd === "client") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/allClients", config).then((response) => {
        setShimmer(false)
        setClients(response.data)
        console.log(response.data)
      })
    }
    if (props.curd === "employee") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/allEmployees", config).then((response) => {
        setShimmer(false)
        setClients(response.data)
        console.log(response.data)
      })
    }
    if (props.curd === "client") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/alldrivers", config).then((response) => {
        setShimmer(false)
        setClients(response.data)
        console.log(response.data)
      })
    }
  }
  const deleteItem = (e) => {
    if(props.curd==="employee"){
      window.confirm('are you sure')
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.delete(`/dashboard/deleteEmployee/${e}`,config).then((response)=>{
        console.log(response.data)
        getData()
        alert('deleted successfully')

      })
    }
    if(props.curd==="client"){
      window.confirm('are you sure')
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.delete(`/dashboard/deleteClient/${e}`,config).then((response)=>{
        console.log(response.data)
        getData()
        alert('deleted successfully')
      })
    }

  }
  return (
    <div className="bg-white">
      <Header />

      <div className="bg-white pt-2">
        {clients.length != 0 && props.curd == "client" && <div className=" pl-8 pt-3 space-x-14 pb-3">
          <button onClick={() => { history.push('/dashboard/createClient') }} className="btn btn-success ">Add Client</button>
        </div>}
        {clients.length != 0 && props.curd == "employee" && <div className=" pl-8 pt-3 space-x-14 pb-3">
          <button onClick={() => { history.push('/dashboard/createEmployee') }} className="btn btn-success ">Add Employee</button>
        </div>}
        {clients.length != 0 && props.curd == "client" && <h1 className="text-center pb-3">Clients</h1>}
        {clients.length != 0 && props.curd == "employee" && <h1 className="text-center pb-3">Employees</h1>}
        <Table className="responsive" striped bordered hover>
          {clients.length != 0 && <thead>
            <tr>
              <th>No</th>
              <th> Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>}
          <tbody

          >{
              clients.map((item, key) =>
                <tr>
                  <td>{key + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td className="space-x-2 space-y-2 "><span><button className="btnb"><img width="25" onClick={() => {
                    history.push({
                      pathname: `/dashboard/update/${item.id}`,
                      state: { id: item.id }
                    });
                  }} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-view-cyber-security-kiranshastry-lineal-kiranshastry-3.png" /></button></span>
                    <span><button className="btny"><img width="25" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-edit-interface-kiranshastry-lineal-kiranshastry.png" />
                    </button></span>
                    <span><button onClick={() => deleteItem(item.id)} className="btnr"><img width="25" src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-delete-multimedia-kiranshastry-lineal-kiranshastry.png" /></button></span>
                  </td>
                </tr>
              )
            }


          </tbody>
        </Table>
        {shimmer &&

          <div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4 max-w-sm w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-200 h-12 w-12"></div>
                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default View
