import logo from './logo.svg';
import './App.css';
import Product from './Product';
import Productcard from './Components/Productcard';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Product/>
    </div>
  );
}

export default App;
