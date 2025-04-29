import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import ProductDetails from './pages/ProductDetails.js';
import Checkout from './pages/Checkout';
import OrderConfirmation from './pages/OrderConfirmation';
import Sidebar from './components/Sidebar.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Router>
        <Header />

        <div className="flex">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
          </div>

          <Sidebar />
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
