import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductDiv from './components/ProductDiv';
import ProductSlider from './components/ProductSlider';
import Electronics from './components/Electronics';

function App() {
  return (
   <>
   <Navbar/>
   <ProductDiv/>
   <ProductSlider/>
   <Electronics/>
   </>
  );
}

export default App;
