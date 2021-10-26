import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { MenuItems } from './NavItems';
import './mainNav.css'

function MainNav() {
 
  return (
    
    <Navbar bg ='myPink' variant ='dark'>
        

            {MenuItems.map((item, index) => {
                return (

                <Nav.Link key = {index} href= {item.url} className= {item.cName}>{item.title}</Nav.Link>

                )
            })}   
       
        </Navbar>

  );

}

export default MainNav;