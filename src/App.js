import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import DropsAndOils from './Components/Oils/DropsAndOils';  // Import your Drops and Oils component
import ButtersAndBundles from './Components/Butters/ButtersAndBundles';  // Import your Butters and Bundles component
import AllScrubs from './Components/Scrubs/Scrubs';  // Import your All Scrubs component
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/drops-and-oils' element={<DropsAndOils />} />
          <Route path='/butters-and-bundles' element={<ButtersAndBundles />} />
          <Route path='/scrubs' element={<AllScrubs />} />
          <Route path='/about-us' element={<ShopCategory category="about us" />} />
          <Route path='/product' element={<Product />} />
          <Route path=':productID' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;



