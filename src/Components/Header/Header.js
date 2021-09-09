import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img width="100px" src="https://covidpcrtestathome.com/images/1.png" alt="" /></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link  ><Link to="/login" >Login{props.auth}</Link></Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </>
        </div>
    )
}

export default Header
