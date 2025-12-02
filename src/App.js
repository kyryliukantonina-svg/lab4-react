import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";

import ProductsList from "./pages/ProductsList";
import AddProduct from "./pages/AddProduct";

function App() {
  const isAuth = () => localStorage.getItem("isAuth") === "true";

  return (
    <div>
      <nav className="topnav">
        <div className="nav-left">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/news" className="nav-link">News</Link>
          <Link to="/profile" className="nav-link">Profile</Link>

          
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/add" className="nav-link">Add Product</Link>
        </div>

        <div className="nav-right">
          {isAuth() ? (
            <button
              className="btn-logout"
              onClick={() => {
                localStorage.setItem("isAuth", "false");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </div>
      </nav>

      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news" element={<News />} />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          
          <Route path="/products" element={<ProductsList />} />
          <Route path="/add" element={<AddProduct />} />

          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
