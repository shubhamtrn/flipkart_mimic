
import './App.css';
import Navbar from './components/Navbar';
import ProductDiv from './components/ProductDiv';
import ProductSlider from './components/ProductSlider';
import Electronics from './components/Electronics';
import KitchensEssentials from './components/KitchensEssentials';
import BeautyToys from './components/BeautyToys';

function App() {
  return (
   <>
   <div className="mainbackground">
   <Navbar/>
   <ProductDiv/>
   <ProductSlider/>
   <Electronics/>
   <KitchensEssentials/>
   <BeautyToys/>
   </div>
   </>
  );
}

export default App;
