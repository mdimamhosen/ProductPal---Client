import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import Layout from "./Layout/Layout";
import "./App.css";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <div className="bg-richblack-900">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="productDetails/:id" element={<ProductDetails />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
