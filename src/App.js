import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router'
import ViewClient from './Components/Dashboard/Clients/ViewClients';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';
import CreateClient from './Components/Dashboard/Clients/CreateClient';
import EditClient from './Components/Dashboard/Clients/EditClient';
import CreateEmployee from './Components/Dashboard/Employee/CreateEmployee';
import EditEmployee from './Components/Dashboard/Employee/EditEmployee';
import ViewEmployees from './Components/Dashboard/Employee/ViewEmployees';
import CreateAppointment from './Components/Dashboard/Appointment/CreateAppointment';
import ConfirmAppointment from './Components/Dashboard/Appointment/ConfirmAppointment';
import CreateDriver from './Components/Dashboard/Driver/CreateDriver';
import ViewDriver from './Components/Dashboard/Driver/ViewDriver';
import Header from './Components/Dashboard/Header/Header';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import { useEffect } from 'react';
import UpdateDriver from './Components/Dashboard/Driver/UpdateDriver';
import SheduledAppointment from './Components/Dashboard/Appointment/SheduledAppointment';
import ViewTask from './Components/Dashboard/Employee/ViewTask';
import TaskDetails from './Components/Dashboard/Employee/TaskDetails';
import CategoryDetails from './Components/Dashboard/Appointment/CategoryDetails';
import AddClient from './Components/Dashboard/Clients/AddClient';
import CreateNewClient from './Components/Dashboard/Appointment/CreateNewClient';
import TaskCompleted from './Components/Dashboard/Employee/TaskCompleted';
import Completed from './Components/Dashboard/Appointment/Completed';
import ViewAppointment from './Components/Dashboard/Appointment/ViewAppointment';
import SsfCreate from './Components/Dashboard/Appointment/SsfCreate';
import pageNotFound from './Components/pageNotFound';
import ConfirmAppointmentsClients from './Components/Dashboard/Appointment/ConfirmAppointmentsClients';


function App(props) {
  // this.toggleAlert = this.toggleAlert.bind(this);
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    //console.log(props.location.pathname)
    if (localStorage.getItem("token")) {
      setAuth(true)
    }
  }, [])
  // const location = useLocation()
  const location = useLocation

  return (
    <div style={{ backgroundColor:"white" }} className=" min-h-screen" >

      <Router>
        {/* { auth &&  <Header/> } */}
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route exact path="/dashboard">
          <ProtectedRoutes routes={Dashboard} />
        </Route>
        <Route path="/dashboard/createClient">
          <ProtectedRoutes routes={CreateClient} />
        </Route>
        <Route path="/dashboard/updateClient/:id">
          <ProtectedRoutes routes={EditClient} />
        </Route>
        <Route path="/dashboard/viewClients">
          <ProtectedRoutes routes={ViewClient} />
        </Route>
        <Route path="/dashboard/createEmployee">
          <ProtectedRoutes routes={CreateEmployee} />
        </Route>
        <Route path="/dashboard/updateEmployee/:id">
          <ProtectedRoutes routes={EditEmployee} />
        </Route>
        <Route path="/dashboard/viewEmployees">
          <ProtectedRoutes routes={ViewEmployees} />
        </Route>
        <Route path="/dashboard/createDriver">
          <ProtectedRoutes routes={CreateDriver} />
        </Route>
        <Route path="/dashboard/ViewDrivers">
          <ProtectedRoutes routes={ViewDriver} />
        </Route>
        <Route path="/dashboard/updateDriver/:id">
          <ProtectedRoutes routes={UpdateDriver} />
        </Route>
        <Route path="/dashboard/createAppointment">
          <ProtectedRoutes routes={CreateAppointment} />
        </Route>
        <Route path="/dashboard/confirmAppointments">
          <ProtectedRoutes routes={ConfirmAppointment} />
        </Route>
        <Route path="/dashboard/confirmAppointmentsClients">
          <ProtectedRoutes routes={ConfirmAppointmentsClients} />
        </Route>
        <Route path="/dashboard/scheduledAppointments">
          <ProtectedRoutes routes={SheduledAppointment} />
        </Route>
        <Route path="/dashboard/viewMyTasks">
          <ProtectedRoutes routes={ViewTask} />
        </Route>
        <Route exact path="/dashboard/viewTaskDetails/:id">
          <ProtectedRoutes routes={TaskDetails} />
        </Route>
        <Route path="/dashboard/viewTaskDetails/addClientCategory/:id">
          <ProtectedRoutes routes={AddClient} />
        </Route>
        <Route path="/dashboard/viewTaskDetails/updateClientCategory/:id">
          <ProtectedRoutes routes={EditClient} />
        </Route>
        <Route path="/dashboard/viewTaskDetails/createClient/:id">
          <ProtectedRoutes routes={CreateNewClient} />
        </Route>
        <Route path="/dashboard/viewCompletedTasks">
          <ProtectedRoutes routes={TaskCompleted} />
        </Route>
        <Route path="/dashboard/viewCompletedAppointments">
          <ProtectedRoutes routes={Completed} />
        </Route>
        <Route exact path="/dashboard/viewAppointment/:id">
          <ProtectedRoutes routes={ViewAppointment} />
        </Route>
        <Route exact path="/dashboard/viewAppointmentDetails/ssf-details/:id">
          <ProtectedRoutes routes={SsfCreate} />
        </Route>
        {/* <Route exact path="*" component={pageNotFound}/> */}
         
       
      
      </Router>

      <Footer />
    </div>
  );
}

export default App;
