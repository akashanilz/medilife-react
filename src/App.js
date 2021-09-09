import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Create from './Components/Pages/Curd/Create';
import Update from './Components/Pages/Curd/Update';
import View from './Components/Pages/Curd/View';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes';

function App() {
  return (
    <div className="App">
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
          <Route  path="/dashboard/create">
          <ProtectedRoutes routes={Create}/>
          </Route>
          <Route  path="/dashboard/update">
          <ProtectedRoutes routes={Update}/>
          </Route>
          <Route  path="/dashboard/view">
          <ProtectedRoutes routes={View}/>
          </Route>
        </Router>
    </div>
  );
}

export default App;
