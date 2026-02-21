// import React, { useContext } from 'react';
// import Navbar from './components/Navbar';
// import Hero from './pages/Hero';
// import CardDetails from './pages/CardDetails';
// import Contact from './pages/Contact';
// import About from './pages/About';
// import SearchBar from './pages/SearchBar';
// import Footer from './components/Footer';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SearchBar from './pages/SearchBar';
// import AppContext from './context/AppContext';


// // new pages
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Cart from './components/Cart';
// import Address from './components/Address';

// const App = () => {
//   const { isLoggedIn } = useContext(AppContext); // ✅ from context

//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/search/:term' element={'/SearchBar'} />
//         <Route path="/" element={<Hero />} />
//         <Route path="/pet/:id" element={<CardDetails />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path='/cart' element={<Cart/>} />   
//         <Route path='/address' element={<Address/>} />   
//         <Route path="/search/:term" element={<SearchBar />} />
//         {!isLoggedIn && <Route path="/register" element={<Register />} />}
//         {!isLoggedIn && <Route path="/login" element={<Login />} />}
//         {isLoggedIn && <Route path="/profile" element={<h2 className="p-6 text-center">Welcome to your profile 🎉</h2>} />}
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Address from './components/Address';

// pages
import Hero from './pages/Hero';
import CardDetails from './pages/CardDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import SearchBar from './pages/SearchBar';
import Login from './pages/Login';
import Register from './pages/Register';

// context
import AppContext from './context/AppContext';

const App = () => {
  const { isLoggedIn } = useContext(AppContext); // ✅ from context

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/pet/:id" element={<CardDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />   
        <Route path="/address" element={<Address />} />   
        <Route path="/search/:term" element={<SearchBar />} />

        {/* Auth Routes */}
        {!isLoggedIn && <Route path="/register" element={<Register />} />}
        {!isLoggedIn && <Route path="/login" element={<Login />} />}
        {isLoggedIn && (
          <Route
            path="/profile"
            element={<h2 className="p-6 text-center">Welcome to your profile 🎉</h2>}
          />
        )}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
