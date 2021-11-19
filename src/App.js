import './App.css';

import Nav from './Components/Navbar/MainNav';
import 'bootstrap/dist/css/bootstrap.css'
import About from './Components/About.js';
// import Menu from './Components/Menu.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import NotFound from './Components/NotFound';
import {auth, fs} from '../src/Components/db/Config'
import { useEffect, useState } from 'react';
import {Image} from 'react-bootstrap';
import Carousel from '../src/Components/mainCarousel';
 
function App() {

// getting current user function
function GetCurrentUser(){
  const [user, setUser]=useState(null);
  useEffect(()=>{
      auth.onAuthStateChanged(user=>{
          if(user){
              fs.collection('users').doc(user.uid).get().then(snapshot=>{
                  setUser(snapshot.data().UserName);
              })
          }
          else{
              setUser(null);
          }
      })
  },[])
  return user;
}

const user = GetCurrentUser();


  return (
    <Router>
    <div className="App">
    <Nav user={user}/>
    <Routes>
    <Route path = "/" exact element = {<Home/>}/>
    <Route path="/About" element ={<About/>}/> 
    {/* <Route path = "/Menu" element = {<Menu/>}/> */}
    <Route path = "/Check-Out" element = {<Cart/>}/>
    <Route path = "/Signup" element = {<SignUp/>}/>
    <Route path = "/Login" element = {<Login/>}/>
    <Route element path="*" element = {<NotFound/>}/>
    </Routes>
    </div>
    </Router>
  );
}


export default App;


function Home () {
  return (
    <div>
      <Image src="Menu-Pictures/cookiesandc.jpg" className="logo" alt="The logo of cookies and cake" fluid />
      <Carousel/>
    </div>
  );
}

