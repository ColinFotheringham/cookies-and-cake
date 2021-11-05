import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavItems } from './NavItems.js';
import './mainNav.css'

function MainNav() {
 
  return (
    
    <Navbar bg ='myPink' variant ='dark'>
        

            {NavItems.map((item, index) => {
                return (

                    <Nav.Link key = {index} href= {item.url} className= {item.cName}>{item.title}</Nav.Link>

                )
            })}   
       
        </Navbar>

  );

}

export default MainNav;