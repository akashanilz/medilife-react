import React from 'react'
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../App.css'
function ViewAppointment(props) {
    const location = useLocation()
    console.log(location.state)
    console.warn(props);
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    return (
        <div>
           <h1>Hello</h1> 
           <button onClick={notify}>Notify!</button>
        <ToastContainer  />
        </div>
    )
}

export default ViewAppointment
