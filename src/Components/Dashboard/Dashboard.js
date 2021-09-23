import axios from '../axios'
import React, { useEffect , useState} from 'react'
import Header from '../Dashboard/Header/Header'
import Home from '../Dashboard/Home/Home'
import './Dashboard.css'
import { useHistory } from 'react-router'
function Dashboard() {
  const [auth, setAuth] = useState('')
const history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem("token")){
      history.push('/login')
    }else{
      const token = JSON.parse(localStorage.getItem("token"))
      const config = {
        headers: { Authorization: `Bearer ${token.token} `}
    };
      axios.get("/dashboard", config ).then((response)=>{
        setAuth(response.data)
        console.log(response.data)
        })
    }
    
  }, [])
    return (
      <div>
        {/* <Header auth={auth.role}/> */}
        <Home auth={auth.role}/>
      </div>
    )
}

export default Dashboard
