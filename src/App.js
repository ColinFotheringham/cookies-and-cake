import './App.css';
import Nav from './MainNav/MainNav';
import 'bootstrap/dist/css/bootstrap.css'
import {Image} from 'react-bootstrap';
import logo from './Menu-Pictures/cookiesandc.jpg';
import Carousel from './Carousel/mainCarousel.js';

function App() {
  return (
    <div className="App">
      <Image src={logo} className="logo" alt="The logo of cookies and cake" fluid />
     <Nav/>
     <Carousel/>
     <h1>This is text</h1>
    </div>
  );
}

export default App;
