import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Productcard from './Components/Productcard';
import Navbar from './Components/Header';
import Cart from './Components/Cart';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cart/>
      <Routes>
      <Route path='/' element={<Product/>} />
      </Routes>
    </div>
  );
}
export default App;
