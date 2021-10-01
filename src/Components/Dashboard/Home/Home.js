import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router'
import { toast, ToastContainer } from 'react-toastify';
import Footer from '../../Footer/Footer'
import 'react-toastify/dist/ReactToastify.css';
import './Home.css';
function Home(props) {
  const appointment = () => toast('😜 Successfully scheduled appointment!', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
  const location = useLocation();
  const [count, setCount] = useState('')
  const history = useHistory()
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push('/login')
    } else {
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} ` }
      };
      axios.get('dashboard/count', config).then((response) => {

        setCount(response.data)
      })
    }
    if (location.state === "success") {
      appointment()
      history.replace()

    }
  }, [])
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:max-h-7xl lg:px-8">
          {props.auth ? "" :
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              <div class=" border-gray-200  rounded-md p-4 max-w-sm  w-full  mx-auto">
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
          {/** Admin */}
          {props.auth === 1 && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div onClick={() => { history.push('/dashboard/confirmAppointments') }} className="p-6 max-w-sm cursor-pointer bg-yellow-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>

              </div>
              <div>
                <div className="text-xl font-medium text-black">Confirm Appointments</div>
                <p className="text-white-500  text-3xl font-bold">{count.appointments_not_confirmed}</p>
              </div>

            </div>
            <div onClick={() => { history.push('/dashboard/viewEmployees') }} className="p-6 max-w-sm cursor-pointer bg-red-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />  <circle cx="8.5" cy="7" r="4" />  <polyline points="17 11 19 13 23 9" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Total Employees</div>
                <p className="text-white-500  text-3xl font-bold"> {count.employee}</p>
              </div>

            </div>
            <div onClick={() => { history.push('/dashboard/viewDrivers') }} className="p-6 max-w-sm cursor-pointer bg-green-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" />  <line x1="19" y1="6" x2="19" y2="12" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Total Drivers</div>
                <p className="text-white-500  text-3xl font-bold"> {count.driver}</p>
              </div>

            </div>
            <div onClick={() => { history.push('/dashboard/viewCompletedAppointments') }} className="p-6 max-w-sm cursor-pointer bg-blue-300 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" />  <line x1="19" y1="6" x2="19" y2="12" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Appointments Completed</div>
                <p className="text-white-500  text-3xl font-bold"> {count.appointments_completed}</p>
              </div>

            </div>
            {/* <div className="p-6 max-w-sm cursor-pointer bg-blue-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" />  <line x1="19" y1="6" x2="19" y2="12" /></svg>
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Collected</div>
                                <p className="text-white-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm cursor-pointer bg-pink-400 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" /></svg>
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Pending</div>
                                <p className="text-white-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div> */}
            <div onClick={() => { history.push('/dashboard/createAppointment') }} className="p-6 max-w-sm cursor-pointer bg-blue-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>

              </div>
              <div>
                <div className="text-xl font-medium text-black">Schedule Appointment</div>
                <p className="text-white-500  text-3xl font-bold">** </p>
              </div>

            </div>
            <div onClick={() => { history.push('/dashboard/scheduledAppointments') }} className="p-6 max-w-sm cursor-pointer  bg-purple-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M9 14l2 2l4 -4" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Appointments Scheduled</div>
                <p className="text-white-500  text-3xl font-bold"> {count.appointments_confirmed}</p>
              </div>

            </div>

          </div>}
          {/** Employeee */}
          {props.auth === 2 && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            {/* <div className="p-6 max-w-sm cursor-pointer bg-blue-300 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" />  <line x1="19" y1="6" x2="19" y2="12" /></svg>
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Collected</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div>
                        <div className="p-6 max-w-sm cursor-pointer bg-pink-400 rounded-xl shadow-md flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" /></svg>
                            </div>
                            <div>
                                <div className="text-xl font-medium text-black">Samples Pending</div>
                                <p className="text-gray-500  text-3xl font-bold"> 1</p>
                            </div>

                        </div> */}
            <div onClick={() => { history.push('/dashboard/viewMyTasks') }} className="p-6 max-w-sm cursor-pointer bg-green-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>

              </div>
              <div>
                <div className="text-xl font-medium text-black">Task Assigned</div>
                <p className="text-white-500  text-3xl font-bold"> *</p>
              </div>

            </div>
            <div onClick={() => { history.push('/dashboard/viewCompletedTasks') }} className="p-6 max-w-sm cursor-pointer bg-purple-300 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M9 14l2 2l4 -4" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Task Completed</div>
                <p className="text-white-500  text-3xl font-bold"> *</p>
              </div>

            </div>

          </div>}
          {/**Driver */}
          {props.auth === 3 && <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

            <div onClick={() => { history.push('/dashboard/viewMyTasks') }} className="p-6 max-w-sm cursor-pointer bg-blue-500 rounded-xl shadow-md flex items-center space-x-4">
              <div className="flex-shrink-0">
                <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="8" y1="9" x2="12" y2="9" />  <line x1="16" y1="9" x2="22" y2="9" />  <line x1="19" y1="6" x2="19" y2="12" /></svg>
              </div>
              <div>
                <div className="text-xl font-medium text-black">Task Assigned</div>
                <p className="text-white-500  text-3xl font-bold"> 1</p>
              </div>

            </div>

            {/* <div className="p-6 max-w-sm cursor-pointer bg-purple-300 rounded-xl shadow-md flex items-center space-x-4">
                          <div className="flex-shrink-0">
                              <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 5H7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V7a2 2 0 0 0 -2 -2h-2" />  <rect x="9" y="3" width="6" height="4" rx="2" />  <path d="M9 14l2 2l4 -4" /></svg>
                          </div>
                          <div>
                              <div className="text-xl font-medium text-black">Task Completed</div>
                              <p className="text-white-500  text-3xl font-bold"> 1</p>
                          </div>

                      </div>  */}

          </div>}
          <ToastContainer />
        </div>
      </div>

    </div>
  )
}

export default Home
