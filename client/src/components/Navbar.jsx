// // import React, { useState, useContext } from "react";
// // import logo from "../assets/attachment_81886229.jpeg";
// // import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
// // import { Link, NavLink, useNavigate } from "react-router-dom";
// // import AppContext from "../context/AppContext"; // ✅ Import context

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const navigate = useNavigate();

// //   // ✅ Get auth state
// //   const { user, logoutUser } = useContext(AppContext);

// //   const submitHandler = (e) => {
// //     e.preventDefault();
// //     if (searchTerm.trim()) {
// //       navigate(`/pet/search/${searchTerm}`);
// //       setSearchTerm("");
// //       setIsOpen(false);
// //     }
// //   };

// //   const handleLogout = () => {
// //     logoutUser();
// //     navigate("/login"); // redirect after logout
// //   };

// //   const menuItems = [
// //     { name: "Home", path: "/" },
// //     { name: "About", path: "/about" },
// //     { name: "Contact", path: "/contact" },
// //     { name: "Gallery", path: "/gallery" },
// //     { name: "Profile", path: "/profile" },
// //   ];

// //   return (
// //     <header className="w-full bg-green-200 shadow-md">
// //       <div className="flex justify-between items-center px-6 py-3 sm:px-10">
// //         {/* Logo */}
// //         <Link to="/">
// //           <img
// //             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
// //             src={logo}
// //             alt="logo"
// //           />
// //         </Link>

// //         {/* Desktop Menu */}
// //         <nav className="hidden md:flex items-center gap-10 text-lg font-semibold">
// //           {menuItems.map((item) => (
// //             <NavLink
// //               key={item.name}
// //               to={item.path}
// //               className={({ isActive }) =>
// //                 `pb-1 transition ${
// //                   isActive
// //                     ? "text-red-600 border-b-2 border-red-600"
// //                     : "text-gray-800 hover:text-red-500"
// //                 }`
// //               }
// //             >
// //               {item.name}
// //             </NavLink>
// //           ))}

// //           {/* Search */}
// //           <form onSubmit={submitHandler} className="ml-4">
// //             <input
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="border-2 px-3 py-1 rounded-xl focus:outline-none w-44"
// //               type="text"
// //               placeholder="Search here..."
// //             />
// //           </form>
// //         </nav>

// //         {/* Cart + Auth Buttons */}
// //         <div className="hidden md:flex items-center gap-4 text-xl">
// //           <Link to="/cart" className="cursor-pointer hover:text-red-600">
// //             <FaCartPlus />
// //           </Link>

// //           {user ? (
// //             // ✅ If logged in → Logout
// //             <button
// //               onClick={handleLogout}
// //               className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //             >
// //               Logout
// //             </button>
// //           ) : (
// //             // ✅ If not logged in → Login & Register
// //             <>
// //               <Link
// //                 to="/login"
// //                 className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/register"
// //                 className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //               >
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>

// //         {/* Mobile Hamburger */}
// //         <button
// //           className="md:hidden text-2xl"
// //           onClick={() => setIsOpen(!isOpen)}
// //         >
// //           {isOpen ? <FaTimes /> : <FaBars />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       <div
// //         className={`md:hidden bg-green-100 flex flex-col items-center gap-5 text-lg font-semibold absolute w-full left-0 transition-all duration-300 ease-in-out ${
// //           isOpen ? "top-16 opacity-100" : "-top-[500px] opacity-0"
// //         }`}
// //       >
// //         {menuItems.map((item) => (
// //           <NavLink
// //             key={item.name}
// //             to={item.path}
// //             onClick={() => setIsOpen(false)}
// //             className={({ isActive }) =>
// //               `pb-1 transition ${
// //                 isActive ? "text-blue-600" : "text-gray-800 hover:text-red-500"
// //               }`
// //             }
// //           >
// //             {item.name}
// //           </NavLink>
// //         ))}

// //         {/* Search */}
// //         <form onSubmit={submitHandler} className="w-4/5">
// //           <input
// //             value={searchTerm}
// //             onChange={(e) => setSearchTerm(e.target.value)}
// //             className="border-2 px-3 py-1 rounded-xl w-full focus:outline-none"
// //             type="text"
// //             placeholder="Search here..."
// //           />
// //         </form>

// //         {/* Cart */}
// //         <Link to="/cart" onClick={() => setIsOpen(false)}>
// //           <FaCartPlus className="text-2xl cursor-pointer hover:text-red-600" />
// //         </Link>

// //         {/* Auth Buttons */}
// //         <div className="flex gap-4 pb-4">
// //           {user ? (
// //             <button
// //               onClick={() => {
// //                 handleLogout();
// //                 setIsOpen(false);
// //               }}
// //               className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //             >
// //               Logout
// //             </button>
// //           ) : (
// //             <>
// //               <Link
// //                 to="/login"
// //                 onClick={() => setIsOpen(false)}
// //                 className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //               >
// //                 Login
// //               </Link>
// //               <Link
// //                 to="/register"
// //                 onClick={() => setIsOpen(false)}
// //                 className="px-4 py-1 border border-gray-600 rounded-full bg-transparent text-gray-800 hover:bg-gray-100 transition text-sm"
// //               >
// //                 Register
// //               </Link>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Navbar;
















// import React, { useState, useContext } from "react";
// import logo from "../assets/attachment_81886229.jpeg";
// import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
// import { Link, NavLink, useNavigate } from "react-router-dom";
// import AppContext from "../context/AppContext";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const navigate = useNavigate();

//   const { user, logoutUser } = useContext(AppContext);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     if (searchTerm.trim()) {
//       navigate(`/pet/search/${searchTerm}`);
//       setSearchTerm("");
//       setIsOpen(false);
//     }
//   };

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Profile", path: "/profile" },
//   ];

//   return (
//     <header className="sticky top-0 z-50 w-full bg-green-200 shadow-md">
//       <div className="flex justify-between items-center px-5 py-3 sm:px-10">
//         {/* Logo */}
//         <Link to="/">
//           <img
//             src={logo}
//             alt="logo"
//             className="w-20 sm:w-24 mix-blend-multiply cursor-pointer"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <nav className="hidden md:flex items-center gap-8 text-[17px] font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `pb-1 transition duration-200 ${
//                   isActive
//                     ? "text-red-600 border-b-2 border-red-600"
//                     : "text-gray-800 hover:text-red-500"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Search */}
//           <form onSubmit={submitHandler}>
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border px-3 py-1.5 rounded-full focus:outline-none w-44"
//               type="text"
//               placeholder="Search..."
//             />
//           </form>
//         </nav>

//         {/* Cart + Auth */}
//         <div className="hidden md:flex items-center gap-4">
//           <Link to="/cart" className="text-xl hover:text-red-600">
//             <FaCartPlus />
//           </Link>

//           {user ? (
//             <button
//               onClick={handleLogout}
//               className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/register"
//                 className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Toggle */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed left-0 w-full bg-green-100 shadow-lg transition-all duration-300 ease-in-out ${
//           isOpen ? "top-[70px] opacity-100" : "-top-[500px] opacity-0"
//         }`}
//       >
//         <div className="flex flex-col items-center gap-5 py-6 text-lg font-semibold">
//           {menuItems.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               onClick={() => setIsOpen(false)}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-red-600"
//                   : "text-gray-800 hover:text-red-500"
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}

//           {/* Search */}
//           <form onSubmit={submitHandler} className="w-4/5">
//             <input
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="border px-3 py-2 rounded-full w-full focus:outline-none"
//               type="text"
//               placeholder="Search..."
//             />
//           </form>

//           {/* Cart */}
//           <Link to="/cart" onClick={() => setIsOpen(false)}>
//             <FaCartPlus className="text-2xl hover:text-red-600" />
//           </Link>

//           {/* Auth */}
//           <div className="flex gap-4 pt-2">
//             {user ? (
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsOpen(false);
//                 }}
//                 className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//               >
//                 Logout
//               </button>
//             ) : (
//               <>
//                 <Link
//                   to="/login"
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//                 >
//                   Login
//                 </Link>
//                 <Link
//                   to="/register"
//                   onClick={() => setIsOpen(false)}
//                   className="px-4 py-1.5 border rounded-full text-sm hover:bg-gray-100"
//                 >
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;








import React, { useState, useContext } from "react";
import logo from "../assets/attachment_81886229.jpeg";
import { FaCartPlus, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { user, logoutUser } = useContext(AppContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/pet/search/${searchTerm}`);
      setSearchTerm("");
      setIsOpen(false);
    }
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Gallery", path: "/gallery" },
    { name: "Profile", path: "/profile" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-red-500 font-bold text-lg tracking-wide hidden sm:block">PetShop</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition duration-200 pb-0.5 ${
                    isActive
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-gray-600 hover:text-red-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search - Desktop */}
        <form onSubmit={submitHandler} className="hidden md:flex items-center border border-gray-200 rounded-full px-3 py-1 gap-2 bg-gray-50 focus-within:border-red-400 transition">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent text-sm focus:outline-none w-36"
            type="text"
            placeholder="Search..."
          />
          <button type="submit" className="text-gray-400 hover:text-red-500 transition">
            <FaSearch size={12} />
          </button>
        </form>

        {/* Cart + Auth - Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/cart" className="text-gray-600 hover:text-red-500 transition relative">
            <FaCartPlus size={18} />
          </Link>

          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-1 text-sm border border-red-400 text-red-500 rounded-full hover:bg-red-50 transition font-medium"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-1 text-sm border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition font-medium"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-1 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition font-medium"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-600 hover:text-red-500 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen py-3" : "max-h-0"
        }`}
      >
        <div className="px-4 flex flex-col gap-3">
          
          {/* Mobile Nav Links */}
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium py-1 transition ${
                  isActive ? "text-red-500" : "text-gray-600 hover:text-red-500"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

          {/* Mobile Search */}
          <form onSubmit={submitHandler} className="flex items-center border border-gray-200 rounded-full px-3 py-1.5 gap-2 bg-gray-50">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-transparent text-sm focus:outline-none flex-1"
              type="text"
              placeholder="Search..."
            />
            <button type="submit" className="text-gray-400 hover:text-red-500">
              <FaSearch size={12} />
            </button>
          </form>

          {/* Mobile Cart + Auth */}
          <div className="flex items-center gap-3 pb-2">
            <Link to="/cart" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-red-500 transition">
              <FaCartPlus size={18} />
            </Link>

            {user ? (
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="px-4 py-1 text-sm border border-red-400 text-red-500 rounded-full hover:bg-red-50 transition"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1 text-sm border border-gray-300 text-gray-600 rounded-full hover:bg-gray-50 transition"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1 text-sm bg-red-500 text-white rounded-full hover:bg-red-600 transition"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;