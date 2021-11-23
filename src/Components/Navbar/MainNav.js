import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { auth } from '../db/DBConfig';


export const MainNav = ({user}) => {

  // console.log(user);
  let navigate = useNavigate();

  const handleLogout=()=>{
      auth.signOut().then(()=>{
          navigate('/login');
      })
  }
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark"
        sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <img src={"Menu-Pictures/logo.jpg"} width="40px" height="40px" />
        </Navbar.Brand>

        <Navbar.Toggle  />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
       

            {!user&&<>
           
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/Check-Out">
                <img  src={'Menu-Pictures/cart.png'} width="32px" height="32px"/>
            </Nav.Link>

            </>}


            {user&&<>
              <span className="navbar-text"> Welcome {user}! </span>
              <Nav.Link href="/Check-Out">
                <div>
                <img src={'Menu-Pictures/cart.png'} width="32px" height="32px"/>
                </div>
            </Nav.Link>
              <button type="button" className='btn btn-danger'
                    onClick={handleLogout}>LOGOUT</button>
                </>}                 
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
}

export default MainNav;