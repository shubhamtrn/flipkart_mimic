import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import FlipkartSeller from "./components/FlipkartSeller";
import Cart from "./components/Cart";
import TopOffers from "./components/productdiv/TopOffers";
import GroceryPage from "./components/productdiv/GroceryPage";
import MobilePage from "./components/productdiv/MobilePage";
import FashionPage from "./components/productdiv/FashionPage";
import ElectronicsPage from "./components/productdiv/ElectronicsPage";
import HomePage from "./components/productdiv/HomePage";
import AppliancesPage from "./components/productdiv/AppliancesPage";
import TravelPage from "./components/productdiv/TravelPage";
import BeautyToyPage from "./components/productdiv/BeautyToyPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>

      <Router>
        <Navbar />
        <br /><br /><br />
        <div className="mainbackground">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sellersite">
            <FlipkartSeller />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/top_offer">
            <TopOffers />
          </Route>
          <Route exact path="/grocery">
            <GroceryPage />
          </Route>
          <Route exact path="/mobile">
            <MobilePage />
          </Route>
          <Route exact path="/fashion">
            <FashionPage />
          </Route>
          <Route exact path="/electronic">
            <ElectronicsPage />
          </Route>
          <Route exact path="/homepage">
            <HomePage />
          </Route>
          <Route exact path="/appliance">
            <AppliancesPage />
          </Route>
          <Route exact path="/travel">
            <TravelPage/>
          </Route>
          <Route exact path="/beauty">
            <BeautyToyPage />
          </Route>
        </Switch>
        </div>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
