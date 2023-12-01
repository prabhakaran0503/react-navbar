import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Product from './Porduct';
import Contact from './Contect';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className='header-sec'>
          <header>
              <div className='header-col1'>
                    {/* <h1>LOGO</h1> */}
              </div>
              <div className='header-col2'>
              <Link to={'/home'}>Home</Link>
              <Link to={'/about'}>About</Link>
              <Link to={'/product'}>Product</Link>
              <Link to={'/contect'}>Contact</Link>
              </div>
            </header>          
      </div>
      <div className="App">
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/product' element={<Product/>} />
      <Route path='/contect' element={<Contact/>} />
    </Routes>
    </div>
    </div>
    
  );
}

export default App;
