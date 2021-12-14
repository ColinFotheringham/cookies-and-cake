import React from 'react'
import {auth} from './db/DBConfig'
import {useNavigate} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Container } from 'react-bootstrap'

export const MainNavbar = ({user,totalProducts}) => {

    const navigate = useNavigate();

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            navigate('/login');
        })
    }

    return (
        <Navbar bg="light" expand="lg">
         <Container>
        <Navbar.Brand href="/">Cookies And Cake</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
		
                {!user&&<>
                    <Navbar.Collapse id="basic-navbar-nav">
	            	<Nav className="me-auto">
                    <Nav.Link  href="About"> About</Nav.Link>
                    <Nav.Link  href="Menu"> Menu</Nav.Link>
                    <Nav.Link  href="signup">Sign Up</Nav.Link>
                    <Nav.Link  href="login">Login</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </>} 

                {user&&<>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  href="About"> About</Nav.Link>
                    <Nav.Link  href="Menu"> Menu</Nav.Link>
                    <Nav.Link  href="/">Logged in: {user}</Nav.Link>
                    <Nav.Link  href="cart"><img src="Menu-Pictures/cart.png"/> <span className='cart-indicator'>{totalProducts}</span></Nav.Link>   
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>Logout</div>
                    </Nav>
                    </Navbar.Collapse>
                </>}                     
            </Container>              
            </Navbar>
    )
}