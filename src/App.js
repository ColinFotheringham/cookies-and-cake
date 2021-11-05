import './App.css';
import Nav from './MainNav/MainNav';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './Menu-Pictures/cookiesandc.jpg'

function App() {
  return (
    <div className="App">
      <img src= {logo} className="logo" alt="The logo of cookies and cake"/>
     <Nav/>
     <h1>Welcome to our website</h1>
    </div>
  );
}

export default App;
