import React from "react";
import { Routes, Route } from "react-router-dom";

// pages
import Hero from "../pages/Hero";
import CardDetails from "../pages/CardDetails";
import Contact from "../pages/Contact";
import About from "../pages/About";
import SearchBar from "../pages/SearchBar";
import Login from "../pages/Login";
import Register from "../pages/Register";

// components
import Cart from "../components/Cart";
import Address from "../components/Address";

import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Hero />} />
      <Route path="/pet/:id" element={<CardDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/search/:term" element={<SearchBar />} />

      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🔐 Protected Routes */}
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />

      <Route
        path="/address"
        element={
          <ProtectedRoute>
            <Address />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <h2 className="p-6 text-center">
              Welcome to your profile 🎉
            </h2>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;