import './App.css';
import Nav from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import About from './Components/About.js';
// import Menu from './Components/Menu.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Components/Cart';
import Home from './Components/Home';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import NotFound from './Components/NotFound';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
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
