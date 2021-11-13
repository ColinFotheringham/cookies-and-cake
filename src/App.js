import './App.css';
import Nav from './MainNav/MainNav';
import 'bootstrap/dist/css/bootstrap.css'
import {Image} from 'react-bootstrap';
import logo from './Menu-Pictures/cookiesandc.jpg';
import Carousel from './Carousel/mainCarousel.js';
import About from './Webpages/About.js';
import Cookiecakes from './Webpages/Cookiecakes.js';
import Cookies from './Webpages/Cookies';
import Cupcakes from './Webpages/Cupcakes';
import Gluten from './Webpages/Gluten';
import LoadedSignature from './Webpages/LoadedSignature';
import SignatureCakes from './Webpages/Signaturecakes';
import Tiered from './Webpages/Tiered';
import Vegan from './Webpages/Vegan';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Cart from './Webpages/Cart';

function App() {
  return (
    <Router>
    <div className="App">
    <Nav/>
    <Routes>
    <Route path = "/" exact element = {<Home/>}/>
    <Route path="/about" element ={<About/>}/> 
    <Route path = "/Signature-Cakes" element = {<SignatureCakes/>}/>
    <Route path = "/Loaded-Signature-Cakes" element = {<LoadedSignature/>}/>
    <Route path = "/Gluten-Free" element = {<Gluten/>}/>
    <Route path = "/Vegan-Free" element = {<Vegan/>}/>
    <Route path = "/Tiered-Cakes" element = {<Tiered/>}/>
    <Route path = "/Cupcakes" element = {<Cupcakes/>}/>
    <Route path = "/Cookies" element = {<Cookies/>}/>
    <Route path = "/Cookie-Cakes" element = {<Cookiecakes/>}/>
    <Route path = "/Cart" element = {<Cart/>}/>
    </Routes>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <Image src={logo} className="logo" alt="The logo of cookies and cake" fluid />
    <Carousel/>
  </div>
);

export default App;
