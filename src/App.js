import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Create from './Components/Pages/Curd/Create';
import Update from './Components/Pages/Curd/Update';
import View from './Components/Pages/Curd/View';

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
            <Dashboard></Dashboard>
          </Route>
          <Route  path="/dashboard/create">
            <Create></Create>
          </Route>
          <Route  path="/dashboard/update">
            <Update></Update>
          </Route>
          <Route  path="/dashboard/view">
            <View></View>
          </Route>
        </Router>
    </div>
  );
}

export default App;
