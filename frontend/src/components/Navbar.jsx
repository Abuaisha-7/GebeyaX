import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";
import { IoIosCart } from "react-icons/io";
import loginService from "../services/login.service";
// Import the custom context hook
import { useAuth } from "../../src/context/AuthContext";
// Import the logo image
import Logo from "/GebeyaX.png";
import { useState } from "react";

const Navbar = () => {
  const [ismobile, setIsmobile] = useState(false);
  const { getCartCount } = useCart();
  // Use the custom hook to access the data in the context
  const { isLogged, isAdmin, setIsLogged, user } = useAuth();
  // console.log(useAuth());

  // Log out event handler function
  const logOut = () => {
    // Call the logout function from the login service
    loginService.logOut();
    // refresh the page
    window.location.reload();
    // Set the isLogged state to false
    setIsLogged(false);
  };

  // to slice the email with N character
  
 function shortenEmail(email, maxLength = 5) {
  if (!email) return "";
  return email.length > maxLength ? email.slice(0, maxLength) + "..." : email;
}
  

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-20 h-18 rounded-lg flex items-center justify-center">
              
                <img src={Logo} alt="Logo" className="" />
             
            </div>
            <span className="text-xl font-bold text-gray-800">E-Store</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
            
              to={isLogged ? `/cart/${user.user_id}` : "/login"}
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors relative"
            >
              <IoIosCart size={25} />
              {getCartCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Auth Links */}
          <div className="flex items-center space-x-4">
            {isLogged ? (
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors hidden md:block"
                onClick={logOut}
              >
                Logout
              </Link>
            ) : (
              <Link
                to="/login"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors hidden md:block"
              >
                Login
              </Link>
            )}

            {isLogged ? (
              isAdmin ? (
                <Link
                  to="/admin"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Admin
                </Link>
              ) : (
                <div className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                  Welcome: {shortenEmail(user?.user_email)}
                </div>
              )
            ) : (
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors hidden md:block"
              >
                Register
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600" 
             onClick={() => setIsmobile(!ismobile)}>
              
               <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
               
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
                
              </svg>
            </button>
            {/* // Mobile menu (hidden by default) */}
            <div id="mobile-menu" className={ismobile ? "block fixed top-0 right-0 w-64 h-64 bg-white shadow-lg p-6 z-50 transition-transform" : "hidden" }>
                  <button
              className=" mb-6 fixed right-2 bg-red-600 hover:bg-red-400  text-white px-3 py-2 rounded-3xl text-base font-medium transition-colors"
              onClick={() => setIsmobile(false)}
            >
              X
            </button>
              <Link
                to="/"
                className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                to={isLogged ? "/cart" : "/login"}
                className=" text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors relative flex items-center "
              >
                Cart
                {getCartCount() > 0 && (
                  <span className=" bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center px-2 ml-1">
                    {getCartCount()}
                  </span>
                )}
              </Link>
              {isLogged ? (
                <Link
                  to="/"
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                  onClick={logOut}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="block text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  Login
                </Link>
              )}
              
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
