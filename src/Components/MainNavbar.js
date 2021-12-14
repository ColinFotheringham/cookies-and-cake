import React from 'react'
import {auth} from './db/DBConfig'
import {Link, useNavigate} from 'react-router-dom'
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
                    <Link className="nav-link" to="About">About</Link>
                    <Link className="nav-link" to="Menu"> Menu</Link>
                    <Link className="nav-link" to="Custom">Custom</Link>
                    <Link className="nav-link" to="signup">Sign Up</Link>
                    <Link className="nav-link" to="login">Login</Link>
                    </Nav>
                    </Navbar.Collapse>
                </>} 

                {user&&<>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Link className="nav-link" to="About"> About</Link>
                    <Link className="nav-link" to="Menu"> Menu</Link>
                    <Link className="nav-link" to="Custom"> Custom</Link>
                    <Link className="nav-link" to="/">Logged in: {user}</Link>
                    <Link className="nav-link" to="cart"><img src="Menu-Pictures/cart.png"/> <span className='cart-indicator'>{totalProducts}</span></Link>   
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>Logout</div>
                    </Nav>
                    </Navbar.Collapse>
                </>}                     
            </Container>              
            </Navbar>
    )
}