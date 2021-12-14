import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Menu } from './Components/Menu'
import { Home } from './Components/Home';
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'
import { NotFound } from './Components/NotFound'
// import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'
import About from './Components/About';
import {auth,fs} from './Components/db/DBConfig'
import { MainNavbar as Navbar } from './Components/MainNavbar'

export const App = () => {
  
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

// state of totalProducts
const [totalProducts, setTotalProducts]=useState(0);
// getting cart products   
useEffect(()=>{        
auth.onAuthStateChanged(user=>{
    if(user){
        fs.collection('Cart ' + user.uid).onSnapshot(snapshot=>{
            const qty = snapshot.docs.length;
            setTotalProducts(qty);
        })
    }
})       
},[])  

  return (
      <Router>
      <Navbar user={user} totalProducts={totalProducts}/>
      <Routes>
        <Route exact path="/" element = {<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/add-products" element={<AddProducts/>}/> */}
        <Route path="/cart" element={<Cart/>}/>       
        <Route path="*" element = {<NotFound/>}/> 
        </Routes>      
      </Router>
  )
}

export default App