import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import Productcard from './Components/Productcard';
import Navbar from '../src/View/pages/Header';
import Cart from './View/pages/Cart';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Product/>} />
      <Route path='/cart/' element={<Cart/>} />
      </Routes>
    </div>
  );
}
export default App;
