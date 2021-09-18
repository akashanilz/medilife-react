import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
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
import ViewAppointment from './Components/Dashboard/Appointment/ViewAppointment';

function App() {
  return (
    <div  className="bg-white min-h-screen">
        <Router>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route  exact path="/dashboard">
            <ProtectedRoutes routes={Dashboard}/>
          </Route>
          <Route  path="/dashboard/createClient">
          <ProtectedRoutes routes={CreateClient}/>
          </Route>
          <Route  path="/dashboard/updateClient/:id">
          <ProtectedRoutes routes={EditClient}/>
          </Route>
          <Route  path="/dashboard/viewClients">
          <ProtectedRoutes routes={ViewClient}/>
          </Route>
          <Route  path="/dashboard/createEmployee">
          <ProtectedRoutes routes={CreateEmployee}/>
          </Route>
          <Route  path="/dashboard/updateEmployee/:id">
          <ProtectedRoutes routes={EditEmployee}/>
          </Route>
          <Route  path="/dashboard/viewEmployees">
          <ProtectedRoutes routes={ViewEmployees}/>
          </Route>
          <Route  path="/dashboard/createAppointment">
          <ProtectedRoutes routes={CreateAppointment}/>
          </Route>
          <Route  path="/dashboard/viewAppointment">
          <ProtectedRoutes routes={ViewAppointment}/>
          </Route>
        </Router>
    </div>
  );
}

export default App;
