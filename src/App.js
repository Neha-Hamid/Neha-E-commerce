// App.js
import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shopcategory from './Pages/Shopcategory';
import LoginSignup from './Pages/LoginSignup';
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kids_banner from './components/Assets/banner_kids.png';
import Footer from './components/Footer/Footer';

const ProtectedRoute = ({ children }) => {
  const loggedIn =
    sessionStorage.getItem('loggedInUser') ||
    localStorage.getItem('loggedInUser');
  if (!loggedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Shop />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mens"
            element={
              <ProtectedRoute>
                <Shopcategory banner={men_banner} category="men" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/womens"
            element={
              <ProtectedRoute>
                <Shopcategory banner={women_banner} category="women" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/kids"
            element={
              <ProtectedRoute>
                <Shopcategory banner={kids_banner} category="kid" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          >
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
