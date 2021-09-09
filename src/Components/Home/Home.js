import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import axios from '../axios';
function Home() {

    return (
      <div>
    <Login/>
      </div>
    
    )
}

export default Home
