import axios from '../../axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './View.css'
import { useHistory, useLocation } from 'react-router'
import Header from '../../Dashboard/Header/Header'
import { toast, ToastContainer } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function View(props) {
  const notify = () => toast('😜 Success!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const deleteNotify = () => toast('😭 Deleted Successfully!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const location = useLocation()
  //console.log(location.state)
  const history = useHistory();
  const [empty, setEmpty] = useState(false)
  const [shimmer, setShimmer] = useState(true)
  const [clients, setClients] = useState([])
  const [myTask, setMyTask] = useState([])
  useEffect(() => {
    if (location.state === "success") {
      notify()
      history.replace()
    }

    if (localStorage.getItem("token")) {

      getData()

    }

  }, [])
  function getData() {
    if (props.curd === "client") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/allClients", config).then((response) => {
        setShimmer(false)
        setClients(response.data)
        if (response.data.length === 0) {
          setEmpty(true)
        }
        //console.log(response.data)
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
        if (response.data.length === 0) {
          setEmpty(true)
        }
        //console.log(response.data)
      })
    }
    if (props.curd === "driver") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get("dashboard/allDrivers", config).then((response) => {
        setShimmer(false)
        if (response.data.length === 0) {
          setEmpty(true)
        }
        setClients(response.data)
        //console.log(response.data)
      })
    }
  }
  const deleteItem = (e) => {
    if (props.curd === "employee") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do delete.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
              axios.delete(`/dashboard/deleteEmployee/${e}`, config).then((response) => {
                //console.log(response.data)
                getData()
                deleteNotify()
              })
          },
          {
            label: 'No',
            onClick: () => getData()
          }
        ]
      });

    }
    if (props.curd === "driver") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do delete.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
              axios.delete(`/dashboard/deleteDriver/${e}`, config).then((response) => {
                //console.log(response.data)
                getData()
                deleteNotify()
              })
          },
          {
            label: 'No',
            onClick: () => getData()
          }
        ]
      });

    }
    if (props.curd === "client") {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      confirmAlert({
        title: 'Confirm to delete',
        message: 'Are you sure to do delete.',
        buttons: [
          {
            label: 'Yes',
            onClick: () =>
              axios.delete(`/dashboard/deleteClient/${e}`, config).then((response) => {
                //console.log(response.data)
                getData()
                deleteNotify()
              })
          },
          {
            label: 'No',
            onClick: () => getData()
          }
        ]
      });

    }

  }
  function updateItem(id) {
    if (props.curd === "employee") {
      history.push({
        pathname: `/dashboard/updateEmployee/${id}`,
        state: { id: id }
      });
    }
    if (props.curd === "driver") {
      history.push({
        pathname: `/dashboard/updateDriver/${id}`,
        state: { id: id }
      });
    }
  }
  return (
    <div className="bg-white">
      {clients.length == "0" && <h1 className="empty">Empty</h1>}
      {/* <Header /> */}

      <div className="bg-white pt-2">
        {props.curd == "client" && <div className=" pl-8 pt-3 space-x-14 pb-3">
          <button onClick={() => { history.push('/dashboard/createClient') }} className="btn btn-success ">Add Client</button>
        </div>}
        {props.curd == "employee" && <div className=" pl-8 pt-3 space-x-14 pb-3">
          <button onClick={() => { history.push('/dashboard/createEmployee') }} className="btn btn-success ">Add Nurse</button>
        </div>}
        {props.curd == "driver" && <div className=" pl-8 pt-3 space-x-14 pb-3">
          <button onClick={() => { history.push('/dashboard/createDriver') }} className="btn btn-success ">Add Transporter</button>
        </div>}
        {clients.length != 0 && props.curd == "driver" && <h1 className="head11 text-center pb-3">Transporter</h1>}
        {clients.length != 0 && props.curd == "employee" && <h1 className=" head11 text-center pb-3">Employees</h1>}
        {empty && props.curd == "employee" && <h1 className=" head11 text-center pb-3">No Employees</h1>}
        {empty && props.curd == "client" && <h1 className=" head11 text-center pb-3">No Clients</h1>}
        <div className="responsive pl-3 pr-3">
          <Table striped bordered hover>
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
                    <td className="space-x-2 space-y-2 ">
                      <span><button onClick={() => { updateItem(item.id) }} ><svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="#c9aa0a" class="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                      </svg>
                      </button></span>
                      <span><button onClick={() => deleteItem(item.id)} ><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#f70707" class="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                      </svg></button></span>
                    </td>
                  </tr>
                )
              }


            </tbody>
          </Table>
        </div>
        {shimmer &&

          <div>
            <div class=" border-gray-200  rounded-md p-4  w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">

                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>

                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4  w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">

                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>

                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4  w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">

                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>

                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4  w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">

                <div class="flex-1 space-y-4 py-1">
                  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div class="space-y-2">
                    <div class="h-4 bg-gray-200 rounded"></div>
                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>

                  </div>
                </div>
              </div>
            </div>
            <div class=" border-gray-200  rounded-md p-4  w-full  mx-auto">
              <div class="animate-pulse flex space-x-4">

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
