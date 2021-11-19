import React from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { auth } from '../db/Config';


export const MainNav = ({user}) => {

  console.log(user);
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
          <img src={"Menu-Pictures/logo.jpg"} width="40px" height="40px" />{' '}
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Menu">Menu</Nav.Link>
            <Nav.Link href="/Check-Out">
                <img  src='Menu-Pictures/cart.png'/>
            </Nav.Link>

            {!user&&<>
           
            <Nav.Link href="/Signup">Sign Up</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>

            </>}


            {user&&<>
            <div className="user"> Welcome {user} </div>
              <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
                </>}                 
          </Nav>
        </Navbar.Collapse>
      
      </Navbar>
    </div>
  );
}

export default MainNav;